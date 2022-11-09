import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductOrderConciergeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=companyName;" })
  companyName?: string;

  @Metadata({ data: "form, name=contactEmail;" })
  contactEmail?: string;

  @Metadata({ data: "form, name=contactPhone;" })
  contactPhone?: string;

  @Metadata({ data: "form, name=costConfirmation;" })
  costConfirmation?: boolean;

  @Metadata({ data: "form, name=country;" })
  country?: string;

  @Metadata({ data: "form, name=financialData;" })
  financialData?: boolean;

  @Metadata({ data: "form, name=historicInformation;" })
  historicInformation?: boolean;

  @Metadata({ data: "form, name=informationRequirements;" })
  informationRequirements?: string;

  @Metadata({ data: "form, name=locationInvestigation;" })
  locationInvestigation?: boolean;

  @Metadata({ data: "form, name=priority;" })
  priority?: string;

  @Metadata({ data: "form, name=registerData;" })
  registerData?: boolean;

  @Metadata({ data: "form, name=registerNumber;" })
  registerNumber?: string;

  @Metadata({ data: "form, name=subjectId;" })
  subjectId?: string;
}


export class ProductOrderConciergeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductOrderConciergeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ProductOrderConciergeRequestBody;

  @Metadata()
  security: ProductOrderConciergeSecurity;
}


export class ProductOrderConciergeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productOrderConcierge200ApplicationJsonAny?: any;

  @Metadata()
  productOrderConciergeDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
