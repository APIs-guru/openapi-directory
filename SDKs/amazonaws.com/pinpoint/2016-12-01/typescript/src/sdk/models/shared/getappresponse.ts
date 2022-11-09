import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationResponse } from "./applicationresponse";


export class GetAppResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationResponse" })
  applicationResponse: ApplicationResponse;
}
