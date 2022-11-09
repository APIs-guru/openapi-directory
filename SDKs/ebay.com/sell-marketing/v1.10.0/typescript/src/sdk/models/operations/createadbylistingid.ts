import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAdByListingIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class CreateAdByListingIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateAdByListingIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateAdByListingIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateAdRequest;

  @Metadata()
  security: CreateAdByListingIdSecurity;
}


export class CreateAdByListingIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createAdByListingId201ApplicationJsonObject?: Map<string, any>;
}
