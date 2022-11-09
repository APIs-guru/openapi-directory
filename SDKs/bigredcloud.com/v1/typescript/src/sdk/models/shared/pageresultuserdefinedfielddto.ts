import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserDefinedFieldDto } from "./userdefinedfielddto";


export class PageResultUserDefinedFieldDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.UserDefinedFieldDto })
  items?: UserDefinedFieldDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
