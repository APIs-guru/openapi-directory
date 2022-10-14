package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostOrdersRequestBodyIntegratorEnum string

const (
	PostOrdersRequestBodyIntegratorEnumOneShoppingCart PostOrdersRequestBodyIntegratorEnum = "1ShoppingCart"
	PostOrdersRequestBodyIntegratorEnumThreedCart      PostOrdersRequestBodyIntegratorEnum = "3dCart"
	PostOrdersRequestBodyIntegratorEnumAdobeBc         PostOrdersRequestBodyIntegratorEnum = "AdobeBC"
	PostOrdersRequestBodyIntegratorEnumAmazonAu        PostOrdersRequestBodyIntegratorEnum = "AmazonAU"
	PostOrdersRequestBodyIntegratorEnumAmazonEu        PostOrdersRequestBodyIntegratorEnum = "AmazonEU"
	PostOrdersRequestBodyIntegratorEnumAmazonNa        PostOrdersRequestBodyIntegratorEnum = "AmazonNA"
	PostOrdersRequestBodyIntegratorEnumBigCommerce     PostOrdersRequestBodyIntegratorEnum = "BigCommerce"
	PostOrdersRequestBodyIntegratorEnumBrandBoom       PostOrdersRequestBodyIntegratorEnum = "BrandBoom"
	PostOrdersRequestBodyIntegratorEnumBrightPearl     PostOrdersRequestBodyIntegratorEnum = "BrightPearl"
	PostOrdersRequestBodyIntegratorEnumBuyGoods        PostOrdersRequestBodyIntegratorEnum = "BuyGoods"
	PostOrdersRequestBodyIntegratorEnumCelery          PostOrdersRequestBodyIntegratorEnum = "Celery"
	PostOrdersRequestBodyIntegratorEnumChannelAdvisor  PostOrdersRequestBodyIntegratorEnum = "ChannelAdvisor"
	PostOrdersRequestBodyIntegratorEnumClickbank       PostOrdersRequestBodyIntegratorEnum = "Clickbank"
	PostOrdersRequestBodyIntegratorEnumCommerceHub     PostOrdersRequestBodyIntegratorEnum = "CommerceHub"
	PostOrdersRequestBodyIntegratorEnumCustom          PostOrdersRequestBodyIntegratorEnum = "Custom"
	PostOrdersRequestBodyIntegratorEnumDemandware      PostOrdersRequestBodyIntegratorEnum = "Demandware"
	PostOrdersRequestBodyIntegratorEnumEbay            PostOrdersRequestBodyIntegratorEnum = "Ebay"
	PostOrdersRequestBodyIntegratorEnumEcwid           PostOrdersRequestBodyIntegratorEnum = "Ecwid"
	PostOrdersRequestBodyIntegratorEnumEtsy            PostOrdersRequestBodyIntegratorEnum = "Etsy"
	PostOrdersRequestBodyIntegratorEnumFoxyCart        PostOrdersRequestBodyIntegratorEnum = "FoxyCart"
	PostOrdersRequestBodyIntegratorEnumGoodsie         PostOrdersRequestBodyIntegratorEnum = "Goodsie"
	PostOrdersRequestBodyIntegratorEnumInfusionsoft    PostOrdersRequestBodyIntegratorEnum = "Infusionsoft"
	PostOrdersRequestBodyIntegratorEnumKonnektive      PostOrdersRequestBodyIntegratorEnum = "Konnektive"
	PostOrdersRequestBodyIntegratorEnumLimeLight       PostOrdersRequestBodyIntegratorEnum = "LimeLight"
	PostOrdersRequestBodyIntegratorEnumLinio           PostOrdersRequestBodyIntegratorEnum = "Linio"
	PostOrdersRequestBodyIntegratorEnumLinnworks       PostOrdersRequestBodyIntegratorEnum = "Linnworks"
	PostOrdersRequestBodyIntegratorEnumMagento         PostOrdersRequestBodyIntegratorEnum = "Magento"
	PostOrdersRequestBodyIntegratorEnumNetsuite        PostOrdersRequestBodyIntegratorEnum = "Netsuite"
	PostOrdersRequestBodyIntegratorEnumNewEgg          PostOrdersRequestBodyIntegratorEnum = "NewEgg"
	PostOrdersRequestBodyIntegratorEnumNexternal       PostOrdersRequestBodyIntegratorEnum = "Nexternal"
	PostOrdersRequestBodyIntegratorEnumNuOrder         PostOrdersRequestBodyIntegratorEnum = "NuOrder"
	PostOrdersRequestBodyIntegratorEnumOpencart        PostOrdersRequestBodyIntegratorEnum = "Opencart"
	PostOrdersRequestBodyIntegratorEnumOrderWave       PostOrdersRequestBodyIntegratorEnum = "OrderWave"
	PostOrdersRequestBodyIntegratorEnumOsCommerce1     PostOrdersRequestBodyIntegratorEnum = "osCommerce1"
	PostOrdersRequestBodyIntegratorEnumOverstock       PostOrdersRequestBodyIntegratorEnum = "Overstock"
	PostOrdersRequestBodyIntegratorEnumPayPal          PostOrdersRequestBodyIntegratorEnum = "PayPal"
	PostOrdersRequestBodyIntegratorEnumPrestaShop      PostOrdersRequestBodyIntegratorEnum = "PrestaShop"
	PostOrdersRequestBodyIntegratorEnumPricefalls      PostOrdersRequestBodyIntegratorEnum = "Pricefalls"
	PostOrdersRequestBodyIntegratorEnumQuickbooks      PostOrdersRequestBodyIntegratorEnum = "Quickbooks"
	PostOrdersRequestBodyIntegratorEnumRakuten         PostOrdersRequestBodyIntegratorEnum = "Rakuten"
	PostOrdersRequestBodyIntegratorEnumSears           PostOrdersRequestBodyIntegratorEnum = "Sears"
	PostOrdersRequestBodyIntegratorEnumSellbrite       PostOrdersRequestBodyIntegratorEnum = "Sellbrite"
	PostOrdersRequestBodyIntegratorEnumSellerCloud     PostOrdersRequestBodyIntegratorEnum = "SellerCloud"
	PostOrdersRequestBodyIntegratorEnumShipstation     PostOrdersRequestBodyIntegratorEnum = "Shipstation"
	PostOrdersRequestBodyIntegratorEnumShopify         PostOrdersRequestBodyIntegratorEnum = "Shopify"
	PostOrdersRequestBodyIntegratorEnumSkubana         PostOrdersRequestBodyIntegratorEnum = "Skubana"
	PostOrdersRequestBodyIntegratorEnumSolidCommerce   PostOrdersRequestBodyIntegratorEnum = "SolidCommerce"
	PostOrdersRequestBodyIntegratorEnumSparkPay        PostOrdersRequestBodyIntegratorEnum = "SparkPay"
	PostOrdersRequestBodyIntegratorEnumSpreeCommerce   PostOrdersRequestBodyIntegratorEnum = "SpreeCommerce"
	PostOrdersRequestBodyIntegratorEnumSpsCommerce     PostOrdersRequestBodyIntegratorEnum = "spsCommerce"
	PostOrdersRequestBodyIntegratorEnumStitchLabs      PostOrdersRequestBodyIntegratorEnum = "StitchLabs"
	PostOrdersRequestBodyIntegratorEnumStoneEdge       PostOrdersRequestBodyIntegratorEnum = "StoneEdge"
	PostOrdersRequestBodyIntegratorEnumTradeGecko      PostOrdersRequestBodyIntegratorEnum = "TradeGecko"
	PostOrdersRequestBodyIntegratorEnumUltraCart       PostOrdersRequestBodyIntegratorEnum = "UltraCart"
	PostOrdersRequestBodyIntegratorEnumVolusion        PostOrdersRequestBodyIntegratorEnum = "Volusion"
	PostOrdersRequestBodyIntegratorEnumVtex            PostOrdersRequestBodyIntegratorEnum = "VTEX"
	PostOrdersRequestBodyIntegratorEnumWalmart         PostOrdersRequestBodyIntegratorEnum = "Walmart"
	PostOrdersRequestBodyIntegratorEnumWooCommerce     PostOrdersRequestBodyIntegratorEnum = "WooCommerce"
	PostOrdersRequestBodyIntegratorEnumYahoo           PostOrdersRequestBodyIntegratorEnum = "Yahoo"
)

type PostOrdersRequestBodyItems struct {
	DeclaredValue string `json:"declaredValue"`
	Quantity      int64  `json:"quantity"`
	Sku           string `json:"sku"`
}

type PostOrdersRequestBodyRecipientConsigneeNewV2 struct {
	Address1        string  `json:"address1"`
	Address2        *string `json:"address2,omitempty"`
	AddressLocality string  `json:"addressLocality"`
	AddressRegion   string  `json:"addressRegion"`
	CompanyName     *string `json:"companyName,omitempty"`
	Country         string  `json:"country"`
	Email           string  `json:"email"`
	FirstName       string  `json:"firstName"`
	LastName        string  `json:"lastName"`
	Phone           string  `json:"phone"`
	PostalCode      *string `json:"postalCode,omitempty"`
}

type PostOrdersRequestBodyWarehouse struct {
	ID *int64 `json:"id,omitempty"`
}

type PostOrdersRequestBodyOrderRequestV2 struct {
	Integrator      *PostOrdersRequestBodyIntegratorEnum         `json:"integrator,omitempty"`
	Items           []PostOrdersRequestBodyItems                 `json:"items"`
	MerchantID      *int64                                       `json:"merchantId,omitempty"`
	MerchantOrderID string                                       `json:"merchantOrderId"`
	Notes           *string                                      `json:"notes,omitempty"`
	Recipient       PostOrdersRequestBodyRecipientConsigneeNewV2 `json:"recipient"`
	ShippingMethod  string                                       `json:"shippingMethod"`
	Warehouse       *PostOrdersRequestBodyWarehouse              `json:"warehouse,omitempty"`
}

type PostOrdersSecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

type PostOrdersRequest struct {
	Request  PostOrdersRequestBodyOrderRequestV2 `request:"mediaType=application/json"`
	Security PostOrdersSecurity
}

type PostOrders409ApplicationJSONErrorStandardWithContextV2 struct {
	Context []map[string]interface{} `json:"context,omitempty"`
	Message *string                  `json:"message,omitempty"`
}

type PostOrders201ApplicationJSONCurrentStatusStatusActionRequiredBy struct {
	ID   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type PostOrders201ApplicationJSONCurrentStatusStatusStage struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type PostOrders201ApplicationJSONCurrentStatusStatusState struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type PostOrders201ApplicationJSONCurrentStatusStatusStatusTypeV2 struct {
	ActionRequiredBy *PostOrders201ApplicationJSONCurrentStatusStatusActionRequiredBy `json:"actionRequiredBy,omitempty"`
	Code             string                                                           `json:"code"`
	Detail           *string                                                          `json:"detail,omitempty"`
	DetailCode       string                                                           `json:"detailCode"`
	ID               *int64                                                           `json:"id,omitempty"`
	IsClosed         *bool                                                            `json:"isClosed,omitempty"`
	Name             *string                                                          `json:"name,omitempty"`
	Reason           *string                                                          `json:"reason,omitempty"`
	Stage            PostOrders201ApplicationJSONCurrentStatusStatusStage             `json:"stage"`
	State            PostOrders201ApplicationJSONCurrentStatusStatusState             `json:"state"`
}

type PostOrders201ApplicationJSONCurrentStatusStatusEventV2 struct {
	CreatedBy *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"createdBy,omitempty"`
	Date      *time.Time                                                                                           `json:"date,omitempty"`
	ID        int64                                                                                                `json:"id"`
	Reason    *string                                                                                              `json:"reason,omitempty"`
	Status    *PostOrders201ApplicationJSONCurrentStatusStatusStatusTypeV2                                         `json:"status,omitempty"`
}

type PostOrders201ApplicationJSONMerchantMerchantV2 struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type PostOrders201ApplicationJSONOriginalConsigneeIsoIsoCountryV2 struct {
	ID   *int64  `json:"id,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Name *string `json:"name,omitempty"`
}

type PostOrders201ApplicationJSONOriginalConsigneeConsigneeV2 struct {
	Address1        string                                                                                               `json:"address1"`
	Address2        *string                                                                                              `json:"address2,omitempty"`
	AddressLocality string                                                                                               `json:"addressLocality"`
	AddressRegion   string                                                                                               `json:"addressRegion"`
	CompanyName     *string                                                                                              `json:"companyName,omitempty"`
	Country         string                                                                                               `json:"country"`
	Email           *string                                                                                              `json:"email,omitempty"`
	FirstName       string                                                                                               `json:"firstName"`
	ID              int64                                                                                                `json:"id"`
	Iso             *PostOrders201ApplicationJSONOriginalConsigneeIsoIsoCountryV2                                        `json:"iso,omitempty"`
	LastName        string                                                                                               `json:"lastName"`
	Phone           *string                                                                                              `json:"phone,omitempty"`
	PostalCode      string                                                                                               `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                           `json:"updatedAt,omitempty"`
	UpdatedBy       *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy,omitempty"`
}

type PostOrders201ApplicationJSONParentOrder struct {
	ID *int64 `json:"id,omitempty"`
}

type PostOrders201ApplicationJSONTrackingNumbersCarrierCarrierSimpleV2 struct {
	ID int64 `json:"id"`
}

type PostOrders201ApplicationJSONTrackingNumbersTrackingNumberV2 struct {
	BarcodeScanValue *string                                                            `json:"barcodeScanValue,omitempty"`
	Carrier          *PostOrders201ApplicationJSONTrackingNumbersCarrierCarrierSimpleV2 `json:"carrier,omitempty"`
	Value            *string                                                            `json:"value,omitempty"`
}

type PostOrders201ApplicationJSONWarehouseWarehouseV2 struct {
	ID int64 `json:"id"`
}

type PostOrders201ApplicationJSONOrderResponseV2 struct {
	CurrentStatus          PostOrders201ApplicationJSONCurrentStatusStatusEventV2                                   `json:"currentStatus"`
	DepartDate             *time.Time                                                                               `json:"departDate,omitempty"`
	DispatchDate           *time.Time                                                                               `json:"dispatchDate,omitempty"`
	ID                     int64                                                                                    `json:"id"`
	Merchant               PostOrders201ApplicationJSONMerchantMerchantV2                                           `json:"merchant"`
	MerchantOrderID        string                                                                                   `json:"merchantOrderId"`
	MerchantShippingMethod string                                                                                   `json:"merchantShippingMethod"`
	OriginalConsignee      PostOrders201ApplicationJSONOriginalConsigneeConsigneeV2                                 `json:"originalConsignee"`
	ParentOrder            *PostOrders201ApplicationJSONParentOrder                                                 `json:"parentOrder,omitempty"`
	PurchaseOrderNum       *string                                                                                  `json:"purchaseOrderNum,omitempty"`
	RecordedOn             time.Time                                                                                `json:"recordedOn"`
	TrackingNumbers        []PostOrders201ApplicationJSONTrackingNumbersTrackingNumberV2                            `json:"trackingNumbers,omitempty"`
	ValidatedConsignee     shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee `json:"validatedConsignee"`
	Warehouse              *PostOrders201ApplicationJSONWarehouseWarehouseV2                                        `json:"warehouse,omitempty"`
}

type PostOrdersResponse struct {
	ContentType                                           string
	ErrorStandardWithContextV2                            *PostOrders409ApplicationJSONErrorStandardWithContextV2
	OrderResponseV2                                       *PostOrders201ApplicationJSONOrderResponseV2
	StatusCode                                            int64
	OneordersGetResponses404ContentApplication1jsonSchema *shared.OneordersGetResponses404ContentApplication1jsonSchema
}
