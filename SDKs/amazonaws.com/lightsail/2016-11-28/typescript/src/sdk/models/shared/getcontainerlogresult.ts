import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceLogEvent } from "./containerservicelogevent";



export class GetContainerLogResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logEvents", elemType: ContainerServiceLogEvent })
  logEvents?: ContainerServiceLogEvent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
