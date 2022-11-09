import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AndroidpublisherReviewsReplyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=packageName" })
  packageName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: string;
}


export class AndroidpublisherReviewsReplyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AndroidpublisherReviewsReplySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AndroidpublisherReviewsReplyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AndroidpublisherReviewsReplyPathParams;

  @Metadata()
  queryParams: AndroidpublisherReviewsReplyQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ReviewsReplyRequest;

  @Metadata()
  security: AndroidpublisherReviewsReplySecurity;
}


export class AndroidpublisherReviewsReplyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
