import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLogGroupFieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;
}
