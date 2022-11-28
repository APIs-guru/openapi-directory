import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationResponse } from "./applicationresponse";



export class CreateAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationResponse" })
  applicationResponse: ApplicationResponse;
}
