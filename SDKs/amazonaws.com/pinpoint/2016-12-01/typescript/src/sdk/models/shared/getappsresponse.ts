import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationsResponse } from "./applicationsresponse";


export class GetAppsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationsResponse" })
  applicationsResponse: ApplicationsResponse;
}
