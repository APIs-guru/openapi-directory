import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListBonusPaymentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListBonusPaymentsXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListBonusPayments = "MTurkRequesterServiceV20170117.ListBonusPayments"
}


export class ListBonusPaymentsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListBonusPaymentsXAmzTargetEnum;
}


export class ListBonusPaymentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListBonusPaymentsQueryParams;

  @Metadata()
  headers: ListBonusPaymentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListBonusPaymentsRequest;
}


export class ListBonusPaymentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listBonusPaymentsResponse?: shared.ListBonusPaymentsResponse;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
