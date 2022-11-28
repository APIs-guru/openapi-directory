import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserDefinedFieldDto } from "./userdefinedfielddto";



export class PageResultUserDefinedFieldDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: UserDefinedFieldDto })
  items?: UserDefinedFieldDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
