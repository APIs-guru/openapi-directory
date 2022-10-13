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
	Address2        *string `json:"address2"`
	AddressLocality string  `json:"addressLocality"`
	AddressRegion   string  `json:"addressRegion"`
	CompanyName     *string `json:"companyName"`
	Country         string  `json:"country"`
	Email           string  `json:"email"`
	FirstName       string  `json:"firstName"`
	LastName        string  `json:"lastName"`
	Phone           string  `json:"phone"`
	PostalCode      *string `json:"postalCode"`
}

type PostOrdersRequestBodyWarehouse struct {
	ID *int64 `json:"id"`
}

type PostOrdersRequestBodyOrderRequestV2 struct {
	Integrator      *PostOrdersRequestBodyIntegratorEnum         `json:"integrator"`
	Items           []PostOrdersRequestBodyItems                 `json:"items"`
	MerchantID      *int64                                       `json:"merchantId"`
	MerchantOrderID string                                       `json:"merchantOrderId"`
	Notes           *string                                      `json:"notes"`
	Recipient       PostOrdersRequestBodyRecipientConsigneeNewV2 `json:"recipient"`
	ShippingMethod  string                                       `json:"shippingMethod"`
	Warehouse       *PostOrdersRequestBodyWarehouse              `json:"warehouse"`
}

type PostOrdersSecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

type PostOrdersRequest struct {
	Request  PostOrdersRequestBodyOrderRequestV2 `request:"mediaType=application/json"`
	Security PostOrdersSecurity
}

type PostOrders409ApplicationJSONErrorStandardWithContextV2 struct {
	Context []map[string]interface{} `json:"context"`
	Message *string                  `json:"message"`
}

type PostOrders201ApplicationJSONCurrentStatusStatusActionRequiredBy struct {
	ID   *int64  `json:"id"`
	Name *string `json:"name"`
}

type PostOrders201ApplicationJSONCurrentStatusStatusStage struct {
	Code *string `json:"code"`
	Name *string `json:"name"`
}

type PostOrders201ApplicationJSONCurrentStatusStatusState struct {
	Code *string `json:"code"`
	Name *string `json:"name"`
}

type PostOrders201ApplicationJSONCurrentStatusStatusStatusTypeV2 struct {
	ActionRequiredBy *PostOrders201ApplicationJSONCurrentStatusStatusActionRequiredBy `json:"actionRequiredBy"`
	Code             string                                                           `json:"code"`
	Detail           *string                                                          `json:"detail"`
	DetailCode       string                                                           `json:"detailCode"`
	ID               *int64                                                           `json:"id"`
	IsClosed         *bool                                                            `json:"isClosed"`
	Name             *string                                                          `json:"name"`
	Reason           *string                                                          `json:"reason"`
	Stage            PostOrders201ApplicationJSONCurrentStatusStatusStage             `json:"stage"`
	State            PostOrders201ApplicationJSONCurrentStatusStatusState             `json:"state"`
}

type PostOrders201ApplicationJSONCurrentStatusStatusEventV2 struct {
	CreatedBy *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"createdBy"`
	Date      *time.Time                                                                                           `json:"date"`
	ID        int64                                                                                                `json:"id"`
	Reason    *string                                                                                              `json:"reason"`
	Status    *PostOrders201ApplicationJSONCurrentStatusStatusStatusTypeV2                                         `json:"status"`
}

type PostOrders201ApplicationJSONMerchantMerchantV2 struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type PostOrders201ApplicationJSONOriginalConsigneeIsoIsoCountryV2 struct {
	ID   *int64  `json:"id"`
	Iso2 *string `json:"iso2"`
	Name *string `json:"name"`
}

type PostOrders201ApplicationJSONOriginalConsigneeConsigneeV2 struct {
	Address1        string                                                                                               `json:"address1"`
	Address2        *string                                                                                              `json:"address2"`
	AddressLocality string                                                                                               `json:"addressLocality"`
	AddressRegion   string                                                                                               `json:"addressRegion"`
	CompanyName     *string                                                                                              `json:"companyName"`
	Country         string                                                                                               `json:"country"`
	Email           *string                                                                                              `json:"email"`
	FirstName       string                                                                                               `json:"firstName"`
	ID              int64                                                                                                `json:"id"`
	Iso             *PostOrders201ApplicationJSONOriginalConsigneeIsoIsoCountryV2                                        `json:"iso"`
	LastName        string                                                                                               `json:"lastName"`
	Phone           *string                                                                                              `json:"phone"`
	PostalCode      string                                                                                               `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                           `json:"updatedAt"`
	UpdatedBy       *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy"`
}

type PostOrders201ApplicationJSONParentOrder struct {
	ID *int64 `json:"id"`
}

type PostOrders201ApplicationJSONTrackingNumbersCarrierCarrierSimpleV2 struct {
	ID int64 `json:"id"`
}

type PostOrders201ApplicationJSONTrackingNumbersTrackingNumberV2 struct {
	BarcodeScanValue *string                                                            `json:"barcodeScanValue"`
	Carrier          *PostOrders201ApplicationJSONTrackingNumbersCarrierCarrierSimpleV2 `json:"carrier"`
	Value            *string                                                            `json:"value"`
}

type PostOrders201ApplicationJSONWarehouseWarehouseV2 struct {
	ID int64 `json:"id"`
}

type PostOrders201ApplicationJSONOrderResponseV2 struct {
	CurrentStatus          PostOrders201ApplicationJSONCurrentStatusStatusEventV2                                   `json:"currentStatus"`
	DepartDate             *time.Time                                                                               `json:"departDate"`
	DispatchDate           *time.Time                                                                               `json:"dispatchDate"`
	ID                     int64                                                                                    `json:"id"`
	Merchant               PostOrders201ApplicationJSONMerchantMerchantV2                                           `json:"merchant"`
	MerchantOrderID        string                                                                                   `json:"merchantOrderId"`
	MerchantShippingMethod string                                                                                   `json:"merchantShippingMethod"`
	OriginalConsignee      PostOrders201ApplicationJSONOriginalConsigneeConsigneeV2                                 `json:"originalConsignee"`
	ParentOrder            *PostOrders201ApplicationJSONParentOrder                                                 `json:"parentOrder"`
	PurchaseOrderNum       *string                                                                                  `json:"purchaseOrderNum"`
	RecordedOn             time.Time                                                                                `json:"recordedOn"`
	TrackingNumbers        []PostOrders201ApplicationJSONTrackingNumbersTrackingNumberV2                            `json:"trackingNumbers"`
	ValidatedConsignee     shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee `json:"validatedConsignee"`
	Warehouse              *PostOrders201ApplicationJSONWarehouseWarehouseV2                                        `json:"warehouse"`
}

type PostOrdersResponse struct {
	ContentType                                           string
	ErrorStandardWithContextV2                            *PostOrders409ApplicationJSONErrorStandardWithContextV2
	OrderResponseV2                                       *PostOrders201ApplicationJSONOrderResponseV2
	StatusCode                                            int64
	OneordersGetResponses404ContentApplication1jsonSchema *shared.OneordersGetResponses404ContentApplication1jsonSchema
}
