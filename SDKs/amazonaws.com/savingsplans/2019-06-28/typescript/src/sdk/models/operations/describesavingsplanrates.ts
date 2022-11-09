import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeSavingsPlanRatesHeaders extends SpeakeasyBase {
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


export class DescribeSavingsPlanRatesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.SavingsPlanRateFilter })
  filters?: shared.SavingsPlanRateFilter[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=savingsPlanId" })
  savingsPlanId: string;
}


export class DescribeSavingsPlanRatesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeSavingsPlanRatesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeSavingsPlanRatesRequestBody;
}


export class DescribeSavingsPlanRatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeSavingsPlanRatesResponse?: shared.DescribeSavingsPlanRatesResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
