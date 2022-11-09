import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUtterancesViewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botname" })
  botname: string;
}

export enum GetUtterancesViewStatusTypeEnum {
    Detected = "Detected"
,    Missed = "Missed"
}

export enum GetUtterancesViewViewEnum {
    Aggregation = "aggregation"
}


export class GetUtterancesViewQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bot_versions" })
  botVersions: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=status_type" })
  statusType: GetUtterancesViewStatusTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view: GetUtterancesViewViewEnum;
}


export class GetUtterancesViewHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetUtterancesViewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUtterancesViewPathParams;

  @Metadata()
  queryParams: GetUtterancesViewQueryParams;

  @Metadata()
  headers: GetUtterancesViewHeaders;
}


export class GetUtterancesViewResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getUtterancesViewResponse?: shared.GetUtterancesViewResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
