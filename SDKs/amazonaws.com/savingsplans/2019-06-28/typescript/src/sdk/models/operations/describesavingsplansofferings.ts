import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeSavingsPlansOfferingsHeaders extends SpeakeasyBase {
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

export enum DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum {
    Ec2 = "EC2"
,    Fargate = "Fargate"
,    Lambda = "Lambda"
,    SageMaker = "SageMaker"
}


export class DescribeSavingsPlansOfferingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencies" })
  currencies?: shared.CurrencyCodeEnum[];

  @Metadata({ data: "json, name=descriptions" })
  descriptions?: string[];

  @Metadata({ data: "json, name=durations" })
  durations?: number[];

  @Metadata({ data: "json, name=filters", elemType: shared.SavingsPlanOfferingFilterElement })
  filters?: shared.SavingsPlanOfferingFilterElement[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=offeringIds" })
  offeringIds?: string[];

  @Metadata({ data: "json, name=operations" })
  operations?: string[];

  @Metadata({ data: "json, name=paymentOptions" })
  paymentOptions?: shared.SavingsPlanPaymentOptionEnum[];

  @Metadata({ data: "json, name=planTypes" })
  planTypes?: shared.SavingsPlanTypeEnum[];

  @Metadata({ data: "json, name=productType" })
  productType?: DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum;

  @Metadata({ data: "json, name=serviceCodes" })
  serviceCodes?: string[];

  @Metadata({ data: "json, name=usageTypes" })
  usageTypes?: string[];
}


export class DescribeSavingsPlansOfferingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeSavingsPlansOfferingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeSavingsPlansOfferingsRequestBody;
}


export class DescribeSavingsPlansOfferingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeSavingsPlansOfferingsResponse?: shared.DescribeSavingsPlansOfferingsResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
