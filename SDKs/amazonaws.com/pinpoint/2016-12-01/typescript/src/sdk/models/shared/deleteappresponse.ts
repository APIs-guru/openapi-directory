import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationResponse } from "./applicationresponse";



export class DeleteAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationResponse" })
  applicationResponse: ApplicationResponse;
}
