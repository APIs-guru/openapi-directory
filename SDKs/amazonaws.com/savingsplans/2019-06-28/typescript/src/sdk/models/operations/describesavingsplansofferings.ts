import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeSavingsPlansOfferingsHeaders extends SpeakeasyBase {
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

export enum DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum {
    Ec2 = "EC2",
    Fargate = "Fargate",
    Lambda = "Lambda",
    SageMaker = "SageMaker"
}


export class DescribeSavingsPlansOfferingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencies" })
  currencies?: shared.CurrencyCodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=descriptions" })
  descriptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=durations" })
  durations?: number[];

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: shared.SavingsPlanOfferingFilterElement })
  filters?: shared.SavingsPlanOfferingFilterElement[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=offeringIds" })
  offeringIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=operations" })
  operations?: string[];

  @SpeakeasyMetadata({ data: "json, name=paymentOptions" })
  paymentOptions?: shared.SavingsPlanPaymentOptionEnum[];

  @SpeakeasyMetadata({ data: "json, name=planTypes" })
  planTypes?: shared.SavingsPlanTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=productType" })
  productType?: DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceCodes" })
  serviceCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=usageTypes" })
  usageTypes?: string[];
}


export class DescribeSavingsPlansOfferingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeSavingsPlansOfferingsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DescribeSavingsPlansOfferingsRequestBody;
}


export class DescribeSavingsPlansOfferingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeSavingsPlansOfferingsResponse?: shared.DescribeSavingsPlansOfferingsResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
