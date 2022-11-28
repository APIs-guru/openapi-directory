import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUtterancesViewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botname" })
  botname: string;
}

export enum GetUtterancesViewStatusTypeEnum {
    Detected = "Detected",
    Missed = "Missed"
}

export enum GetUtterancesViewViewEnum {
    Aggregation = "aggregation"
}


export class GetUtterancesViewQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bot_versions" })
  botVersions: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status_type" })
  statusType: GetUtterancesViewStatusTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view: GetUtterancesViewViewEnum;
}


export class GetUtterancesViewHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetUtterancesViewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUtterancesViewPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUtterancesViewQueryParams;

  @SpeakeasyMetadata()
  headers: GetUtterancesViewHeaders;
}


export class GetUtterancesViewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUtterancesViewResponse?: shared.GetUtterancesViewResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
