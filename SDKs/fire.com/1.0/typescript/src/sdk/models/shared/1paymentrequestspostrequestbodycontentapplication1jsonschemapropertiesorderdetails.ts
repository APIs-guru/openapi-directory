import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment1" })
  comment1?: string;

  @Metadata({ data: "json, name=comment2" })
  comment2?: string;

  @Metadata({ data: "json, name=customerNumber" })
  customerNumber?: string;

  @Metadata({ data: "json, name=deliveryAddressLine1" })
  deliveryAddressLine1?: string;

  @Metadata({ data: "json, name=deliveryAddressLine2" })
  deliveryAddressLine2?: string;

  @Metadata({ data: "json, name=deliveryCity" })
  deliveryCity?: string;

  @Metadata({ data: "json, name=deliveryCountry" })
  deliveryCountry?: string;

  @Metadata({ data: "json, name=deliveryPostCode" })
  deliveryPostCode?: string;

  @Metadata({ data: "json, name=merchantCustomerIdentification" })
  merchantCustomerIdentification?: string;

  @Metadata({ data: "json, name=merchantNumber" })
  merchantNumber?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=variableReference" })
  variableReference?: string;
}
