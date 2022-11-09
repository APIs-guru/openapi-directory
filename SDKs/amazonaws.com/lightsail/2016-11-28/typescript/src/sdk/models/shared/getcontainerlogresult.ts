import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerServiceLogEvent } from "./containerservicelogevent";


export class GetContainerLogResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=logEvents", elemType: shared.ContainerServiceLogEvent })
  logEvents?: ContainerServiceLogEvent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
