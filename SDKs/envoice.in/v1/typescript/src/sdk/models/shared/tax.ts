import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Tax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: number;
}
