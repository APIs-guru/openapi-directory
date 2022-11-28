import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationsResponse } from "./applicationsresponse";



export class GetAppsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationsResponse" })
  applicationsResponse: ApplicationsResponse;
}
