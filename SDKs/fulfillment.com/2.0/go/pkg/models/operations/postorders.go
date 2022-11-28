package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostOrdersOrderRequestV2IntegratorEnum string

const (
	PostOrdersOrderRequestV2IntegratorEnumOneShoppingCart PostOrdersOrderRequestV2IntegratorEnum = "1ShoppingCart"
	PostOrdersOrderRequestV2IntegratorEnumThreedCart      PostOrdersOrderRequestV2IntegratorEnum = "3dCart"
	PostOrdersOrderRequestV2IntegratorEnumAdobeBc         PostOrdersOrderRequestV2IntegratorEnum = "AdobeBC"
	PostOrdersOrderRequestV2IntegratorEnumAmazonAu        PostOrdersOrderRequestV2IntegratorEnum = "AmazonAU"
	PostOrdersOrderRequestV2IntegratorEnumAmazonEu        PostOrdersOrderRequestV2IntegratorEnum = "AmazonEU"
	PostOrdersOrderRequestV2IntegratorEnumAmazonNa        PostOrdersOrderRequestV2IntegratorEnum = "AmazonNA"
	PostOrdersOrderRequestV2IntegratorEnumBigCommerce     PostOrdersOrderRequestV2IntegratorEnum = "BigCommerce"
	PostOrdersOrderRequestV2IntegratorEnumBrandBoom       PostOrdersOrderRequestV2IntegratorEnum = "BrandBoom"
	PostOrdersOrderRequestV2IntegratorEnumBrightPearl     PostOrdersOrderRequestV2IntegratorEnum = "BrightPearl"
	PostOrdersOrderRequestV2IntegratorEnumBuyGoods        PostOrdersOrderRequestV2IntegratorEnum = "BuyGoods"
	PostOrdersOrderRequestV2IntegratorEnumCelery          PostOrdersOrderRequestV2IntegratorEnum = "Celery"
	PostOrdersOrderRequestV2IntegratorEnumChannelAdvisor  PostOrdersOrderRequestV2IntegratorEnum = "ChannelAdvisor"
	PostOrdersOrderRequestV2IntegratorEnumClickbank       PostOrdersOrderRequestV2IntegratorEnum = "Clickbank"
	PostOrdersOrderRequestV2IntegratorEnumCommerceHub     PostOrdersOrderRequestV2IntegratorEnum = "CommerceHub"
	PostOrdersOrderRequestV2IntegratorEnumCustom          PostOrdersOrderRequestV2IntegratorEnum = "Custom"
	PostOrdersOrderRequestV2IntegratorEnumDemandware      PostOrdersOrderRequestV2IntegratorEnum = "Demandware"
	PostOrdersOrderRequestV2IntegratorEnumEbay            PostOrdersOrderRequestV2IntegratorEnum = "Ebay"
	PostOrdersOrderRequestV2IntegratorEnumEcwid           PostOrdersOrderRequestV2IntegratorEnum = "Ecwid"
	PostOrdersOrderRequestV2IntegratorEnumEtsy            PostOrdersOrderRequestV2IntegratorEnum = "Etsy"
	PostOrdersOrderRequestV2IntegratorEnumFoxyCart        PostOrdersOrderRequestV2IntegratorEnum = "FoxyCart"
	PostOrdersOrderRequestV2IntegratorEnumGoodsie         PostOrdersOrderRequestV2IntegratorEnum = "Goodsie"
	PostOrdersOrderRequestV2IntegratorEnumInfusionsoft    PostOrdersOrderRequestV2IntegratorEnum = "Infusionsoft"
	PostOrdersOrderRequestV2IntegratorEnumKonnektive      PostOrdersOrderRequestV2IntegratorEnum = "Konnektive"
	PostOrdersOrderRequestV2IntegratorEnumLimeLight       PostOrdersOrderRequestV2IntegratorEnum = "LimeLight"
	PostOrdersOrderRequestV2IntegratorEnumLinio           PostOrdersOrderRequestV2IntegratorEnum = "Linio"
	PostOrdersOrderRequestV2IntegratorEnumLinnworks       PostOrdersOrderRequestV2IntegratorEnum = "Linnworks"
	PostOrdersOrderRequestV2IntegratorEnumMagento         PostOrdersOrderRequestV2IntegratorEnum = "Magento"
	PostOrdersOrderRequestV2IntegratorEnumNetsuite        PostOrdersOrderRequestV2IntegratorEnum = "Netsuite"
	PostOrdersOrderRequestV2IntegratorEnumNewEgg          PostOrdersOrderRequestV2IntegratorEnum = "NewEgg"
	PostOrdersOrderRequestV2IntegratorEnumNexternal       PostOrdersOrderRequestV2IntegratorEnum = "Nexternal"
	PostOrdersOrderRequestV2IntegratorEnumNuOrder         PostOrdersOrderRequestV2IntegratorEnum = "NuOrder"
	PostOrdersOrderRequestV2IntegratorEnumOpencart        PostOrdersOrderRequestV2IntegratorEnum = "Opencart"
	PostOrdersOrderRequestV2IntegratorEnumOrderWave       PostOrdersOrderRequestV2IntegratorEnum = "OrderWave"
	PostOrdersOrderRequestV2IntegratorEnumOsCommerce1     PostOrdersOrderRequestV2IntegratorEnum = "osCommerce1"
	PostOrdersOrderRequestV2IntegratorEnumOverstock       PostOrdersOrderRequestV2IntegratorEnum = "Overstock"
	PostOrdersOrderRequestV2IntegratorEnumPayPal          PostOrdersOrderRequestV2IntegratorEnum = "PayPal"
	PostOrdersOrderRequestV2IntegratorEnumPrestaShop      PostOrdersOrderRequestV2IntegratorEnum = "PrestaShop"
	PostOrdersOrderRequestV2IntegratorEnumPricefalls      PostOrdersOrderRequestV2IntegratorEnum = "Pricefalls"
	PostOrdersOrderRequestV2IntegratorEnumQuickbooks      PostOrdersOrderRequestV2IntegratorEnum = "Quickbooks"
	PostOrdersOrderRequestV2IntegratorEnumRakuten         PostOrdersOrderRequestV2IntegratorEnum = "Rakuten"
	PostOrdersOrderRequestV2IntegratorEnumSears           PostOrdersOrderRequestV2IntegratorEnum = "Sears"
	PostOrdersOrderRequestV2IntegratorEnumSellbrite       PostOrdersOrderRequestV2IntegratorEnum = "Sellbrite"
	PostOrdersOrderRequestV2IntegratorEnumSellerCloud     PostOrdersOrderRequestV2IntegratorEnum = "SellerCloud"
	PostOrdersOrderRequestV2IntegratorEnumShipstation     PostOrdersOrderRequestV2IntegratorEnum = "Shipstation"
	PostOrdersOrderRequestV2IntegratorEnumShopify         PostOrdersOrderRequestV2IntegratorEnum = "Shopify"
	PostOrdersOrderRequestV2IntegratorEnumSkubana         PostOrdersOrderRequestV2IntegratorEnum = "Skubana"
	PostOrdersOrderRequestV2IntegratorEnumSolidCommerce   PostOrdersOrderRequestV2IntegratorEnum = "SolidCommerce"
	PostOrdersOrderRequestV2IntegratorEnumSparkPay        PostOrdersOrderRequestV2IntegratorEnum = "SparkPay"
	PostOrdersOrderRequestV2IntegratorEnumSpreeCommerce   PostOrdersOrderRequestV2IntegratorEnum = "SpreeCommerce"
	PostOrdersOrderRequestV2IntegratorEnumSpsCommerce     PostOrdersOrderRequestV2IntegratorEnum = "spsCommerce"
	PostOrdersOrderRequestV2IntegratorEnumStitchLabs      PostOrdersOrderRequestV2IntegratorEnum = "StitchLabs"
	PostOrdersOrderRequestV2IntegratorEnumStoneEdge       PostOrdersOrderRequestV2IntegratorEnum = "StoneEdge"
	PostOrdersOrderRequestV2IntegratorEnumTradeGecko      PostOrdersOrderRequestV2IntegratorEnum = "TradeGecko"
	PostOrdersOrderRequestV2IntegratorEnumUltraCart       PostOrdersOrderRequestV2IntegratorEnum = "UltraCart"
	PostOrdersOrderRequestV2IntegratorEnumVolusion        PostOrdersOrderRequestV2IntegratorEnum = "Volusion"
	PostOrdersOrderRequestV2IntegratorEnumVtex            PostOrdersOrderRequestV2IntegratorEnum = "VTEX"
	PostOrdersOrderRequestV2IntegratorEnumWalmart         PostOrdersOrderRequestV2IntegratorEnum = "Walmart"
	PostOrdersOrderRequestV2IntegratorEnumWooCommerce     PostOrdersOrderRequestV2IntegratorEnum = "WooCommerce"
	PostOrdersOrderRequestV2IntegratorEnumYahoo           PostOrdersOrderRequestV2IntegratorEnum = "Yahoo"
)

type PostOrdersOrderRequestV2Items struct {
	DeclaredValue string `json:"declaredValue"`
	Quantity      int64  `json:"quantity"`
	Sku           string `json:"sku"`
}

type PostOrdersOrderRequestV2ConsigneeNewV2 struct {
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

// PostOrdersOrderRequestV2Warehouse
// We automatically select a warehouse based on inventory availability, requested carrier and delivery schedule, and carrier cost. You may however override this process. Because this is not recommended please inform your AE prior to using so they may enable this feature.
type PostOrdersOrderRequestV2Warehouse struct {
	ID *int64 `json:"id,omitempty"`
}

type PostOrdersOrderRequestV2 struct {
	Integrator      *PostOrdersOrderRequestV2IntegratorEnum `json:"integrator,omitempty"`
	Items           []PostOrdersOrderRequestV2Items         `json:"items"`
	MerchantID      *int64                                  `json:"merchantId,omitempty"`
	MerchantOrderID string                                  `json:"merchantOrderId"`
	Notes           *string                                 `json:"notes,omitempty"`
	Recipient       PostOrdersOrderRequestV2ConsigneeNewV2  `json:"recipient"`
	ShippingMethod  string                                  `json:"shippingMethod"`
	Warehouse       *PostOrdersOrderRequestV2Warehouse      `json:"warehouse,omitempty"`
}

type PostOrdersSecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

type PostOrdersErrorStandardWithContextV2 struct {
	Context []map[string]interface{} `json:"context,omitempty"`
	Message *string                  `json:"message,omitempty"`
}

// PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
// Responsibility for resolving this issue
type PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy struct {
	ID   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 struct {
	ActionRequiredBy *PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy `json:"actionRequiredBy,omitempty"`
	Code             string                                                              `json:"code"`
	Detail           *string                                                             `json:"detail,omitempty"`
	DetailCode       string                                                              `json:"detailCode"`
	ID               *int64                                                              `json:"id,omitempty"`
	IsClosed         *bool                                                               `json:"isClosed,omitempty"`
	Name             *string                                                             `json:"name,omitempty"`
	Reason           *string                                                             `json:"reason,omitempty"`
	Stage            PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage             `json:"stage"`
	State            PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State             `json:"state"`
}

type PostOrdersOrderResponseV2StatusEventV2 struct {
	CreatedBy *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"createdBy,omitempty"`
	Date      *time.Time                                                                                           `json:"date,omitempty"`
	ID        int64                                                                                                `json:"id"`
	Reason    *string                                                                                              `json:"reason,omitempty"`
	Status    *PostOrdersOrderResponseV2StatusEventV2StatusTypeV2                                                  `json:"status,omitempty"`
}

type PostOrdersOrderResponseV2MerchantV2 struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2 struct {
	ID   *int64  `json:"id,omitempty"`
	Iso2 *string `json:"iso2,omitempty"`
	Name *string `json:"name,omitempty"`
}

type PostOrdersOrderResponseV2ConsigneeV2 struct {
	Address1        string                                                                                               `json:"address1"`
	Address2        *string                                                                                              `json:"address2,omitempty"`
	AddressLocality string                                                                                               `json:"addressLocality"`
	AddressRegion   string                                                                                               `json:"addressRegion"`
	CompanyName     *string                                                                                              `json:"companyName,omitempty"`
	Country         string                                                                                               `json:"country"`
	Email           *string                                                                                              `json:"email,omitempty"`
	FirstName       string                                                                                               `json:"firstName"`
	ID              int64                                                                                                `json:"id"`
	Iso             *PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2                                                    `json:"iso,omitempty"`
	LastName        string                                                                                               `json:"lastName"`
	Phone           *string                                                                                              `json:"phone,omitempty"`
	PostalCode      string                                                                                               `json:"postalCode"`
	UpdatedAt       *time.Time                                                                                           `json:"updatedAt,omitempty"`
	UpdatedBy       *shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"updatedBy,omitempty"`
}

type PostOrdersOrderResponseV2ParentOrder struct {
	ID *int64 `json:"id,omitempty"`
}

type PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2 struct {
	ID int64 `json:"id"`
}

type PostOrdersOrderResponseV2TrackingNumberV2 struct {
	BarcodeScanValue *string                                                   `json:"barcodeScanValue,omitempty"`
	Carrier          *PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2 `json:"carrier,omitempty"`
	Value            *string                                                   `json:"value,omitempty"`
}

type PostOrdersOrderResponseV2WarehouseV2 struct {
	ID int64 `json:"id"`
}

type PostOrdersOrderResponseV2 struct {
	CurrentStatus          PostOrdersOrderResponseV2StatusEventV2                                                   `json:"currentStatus"`
	DepartDate             *time.Time                                                                               `json:"departDate,omitempty"`
	DispatchDate           *time.Time                                                                               `json:"dispatchDate,omitempty"`
	ID                     int64                                                                                    `json:"id"`
	Merchant               PostOrdersOrderResponseV2MerchantV2                                                      `json:"merchant"`
	MerchantOrderID        string                                                                                   `json:"merchantOrderId"`
	MerchantShippingMethod string                                                                                   `json:"merchantShippingMethod"`
	OriginalConsignee      PostOrdersOrderResponseV2ConsigneeV2                                                     `json:"originalConsignee"`
	ParentOrder            *PostOrdersOrderResponseV2ParentOrder                                                    `json:"parentOrder,omitempty"`
	PurchaseOrderNum       *string                                                                                  `json:"purchaseOrderNum,omitempty"`
	RecordedOn             time.Time                                                                                `json:"recordedOn"`
	TrackingNumbers        []PostOrdersOrderResponseV2TrackingNumberV2                                              `json:"trackingNumbers,omitempty"`
	ValidatedConsignee     shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee `json:"validatedConsignee"`
	Warehouse              *PostOrdersOrderResponseV2WarehouseV2                                                    `json:"warehouse,omitempty"`
}

type PostOrdersRequest struct {
	Request  PostOrdersOrderRequestV2 `request:"mediaType=application/json"`
	Security PostOrdersSecurity
}

type PostOrdersResponse struct {
	ContentType                                           string
	ErrorStandardWithContextV2                            *PostOrdersErrorStandardWithContextV2
	OrderResponseV2                                       *PostOrdersOrderResponseV2
	StatusCode                                            int64
	OneordersGetResponses404ContentApplication1jsonSchema *shared.OneordersGetResponses404ContentApplication1jsonSchema
}
