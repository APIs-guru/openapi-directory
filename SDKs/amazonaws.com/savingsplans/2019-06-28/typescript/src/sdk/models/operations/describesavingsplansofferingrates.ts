import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeSavingsPlansOfferingRatesHeaders extends SpeakeasyBase {
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


export class DescribeSavingsPlansOfferingRatesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.SavingsPlanOfferingRateFilterElement })
  filters?: shared.SavingsPlanOfferingRateFilterElement[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=operations" })
  operations?: string[];

  @Metadata({ data: "json, name=products" })
  products?: shared.SavingsPlanProductTypeEnum[];

  @Metadata({ data: "json, name=savingsPlanOfferingIds" })
  savingsPlanOfferingIds?: string[];

  @Metadata({ data: "json, name=savingsPlanPaymentOptions" })
  savingsPlanPaymentOptions?: shared.SavingsPlanPaymentOptionEnum[];

  @Metadata({ data: "json, name=savingsPlanTypes" })
  savingsPlanTypes?: shared.SavingsPlanTypeEnum[];

  @Metadata({ data: "json, name=serviceCodes" })
  serviceCodes?: shared.SavingsPlanRateServiceCodeEnum[];

  @Metadata({ data: "json, name=usageTypes" })
  usageTypes?: string[];
}


export class DescribeSavingsPlansOfferingRatesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeSavingsPlansOfferingRatesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeSavingsPlansOfferingRatesRequestBody;
}


export class DescribeSavingsPlansOfferingRatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeSavingsPlansOfferingRatesResponse?: shared.DescribeSavingsPlansOfferingRatesResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
