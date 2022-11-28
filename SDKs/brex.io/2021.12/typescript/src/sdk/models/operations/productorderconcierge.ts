import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductOrderConciergeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=companyName;" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "form, name=contactEmail;" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "form, name=contactPhone;" })
  contactPhone?: string;

  @SpeakeasyMetadata({ data: "form, name=costConfirmation;" })
  costConfirmation?: boolean;

  @SpeakeasyMetadata({ data: "form, name=country;" })
  country?: string;

  @SpeakeasyMetadata({ data: "form, name=financialData;" })
  financialData?: boolean;

  @SpeakeasyMetadata({ data: "form, name=historicInformation;" })
  historicInformation?: boolean;

  @SpeakeasyMetadata({ data: "form, name=informationRequirements;" })
  informationRequirements?: string;

  @SpeakeasyMetadata({ data: "form, name=locationInvestigation;" })
  locationInvestigation?: boolean;

  @SpeakeasyMetadata({ data: "form, name=priority;" })
  priority?: string;

  @SpeakeasyMetadata({ data: "form, name=registerData;" })
  registerData?: boolean;

  @SpeakeasyMetadata({ data: "form, name=registerNumber;" })
  registerNumber?: string;

  @SpeakeasyMetadata({ data: "form, name=subjectId;" })
  subjectId?: string;
}


export class ProductOrderConciergeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductOrderConciergeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ProductOrderConciergeRequestBody;

  @SpeakeasyMetadata()
  security: ProductOrderConciergeSecurity;
}


export class ProductOrderConciergeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productOrderConcierge200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  productOrderConciergeDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
