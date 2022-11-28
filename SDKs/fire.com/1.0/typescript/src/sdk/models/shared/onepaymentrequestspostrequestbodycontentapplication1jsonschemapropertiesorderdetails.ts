import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment1" })
  comment1?: string;

  @SpeakeasyMetadata({ data: "json, name=comment2" })
  comment2?: string;

  @SpeakeasyMetadata({ data: "json, name=customerNumber" })
  customerNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryAddressLine1" })
  deliveryAddressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryAddressLine2" })
  deliveryAddressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryCity" })
  deliveryCity?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryCountry" })
  deliveryCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryPostCode" })
  deliveryPostCode?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantCustomerIdentification" })
  merchantCustomerIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantNumber" })
  merchantNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=variableReference" })
  variableReference?: string;
}
