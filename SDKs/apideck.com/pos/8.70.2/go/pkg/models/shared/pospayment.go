package shared

import (
"time")

type PosPaymentCardDetails struct {
    Card *PaymentCard `json:"card,omitempty"`
    
}

type PosPaymentCashDetails struct {
    Amount *interface{} `json:"amount,omitempty"`
    ChargeBackAmount *interface{} `json:"charge_back_amount,omitempty"`
    
}


type PosPaymentExternalDetailsTypeEnum string

const (
    PosPaymentExternalDetailsTypeEnumCheck PosPaymentExternalDetailsTypeEnum = "check"
PosPaymentExternalDetailsTypeEnumBankTransfer PosPaymentExternalDetailsTypeEnum = "bank_transfer"
PosPaymentExternalDetailsTypeEnumOtherGiftCard PosPaymentExternalDetailsTypeEnum = "other_gift_card"
PosPaymentExternalDetailsTypeEnumCrypto PosPaymentExternalDetailsTypeEnum = "crypto"
PosPaymentExternalDetailsTypeEnumSquareCash PosPaymentExternalDetailsTypeEnum = "square_cash"
PosPaymentExternalDetailsTypeEnumSocial PosPaymentExternalDetailsTypeEnum = "social"
PosPaymentExternalDetailsTypeEnumExternal PosPaymentExternalDetailsTypeEnum = "external"
PosPaymentExternalDetailsTypeEnumEmoney PosPaymentExternalDetailsTypeEnum = "emoney"
PosPaymentExternalDetailsTypeEnumCard PosPaymentExternalDetailsTypeEnum = "card"
PosPaymentExternalDetailsTypeEnumStoredBalance PosPaymentExternalDetailsTypeEnum = "stored_balance"
PosPaymentExternalDetailsTypeEnumFoodVoucher PosPaymentExternalDetailsTypeEnum = "food_voucher"
PosPaymentExternalDetailsTypeEnumOther PosPaymentExternalDetailsTypeEnum = "other"
)


type PosPaymentExternalDetails struct {
    Source string `json:"source"`
    SourceFeeAmount *float64 `json:"source_fee_amount,omitempty"`
    SourceID *string `json:"source_id,omitempty"`
    Type PosPaymentExternalDetailsTypeEnum `json:"type"`
    
}


type PosPaymentSourceEnum string

const (
    PosPaymentSourceEnumCard PosPaymentSourceEnum = "card"
PosPaymentSourceEnumBankAccount PosPaymentSourceEnum = "bank_account"
PosPaymentSourceEnumWallet PosPaymentSourceEnum = "wallet"
PosPaymentSourceEnumBnpl PosPaymentSourceEnum = "bnpl"
PosPaymentSourceEnumCash PosPaymentSourceEnum = "cash"
PosPaymentSourceEnumExternal PosPaymentSourceEnum = "external"
PosPaymentSourceEnumOther PosPaymentSourceEnum = "other"
)



type PosPaymentStatusEnum string

const (
    PosPaymentStatusEnumApproved PosPaymentStatusEnum = "approved"
PosPaymentStatusEnumPending PosPaymentStatusEnum = "pending"
PosPaymentStatusEnumCompleted PosPaymentStatusEnum = "completed"
PosPaymentStatusEnumCanceled PosPaymentStatusEnum = "canceled"
PosPaymentStatusEnumFailed PosPaymentStatusEnum = "failed"
PosPaymentStatusEnumOther PosPaymentStatusEnum = "other"
)



type PosPaymentWalletDetailsStatusEnum string

const (
    PosPaymentWalletDetailsStatusEnumAuthorized PosPaymentWalletDetailsStatusEnum = "authorized"
PosPaymentWalletDetailsStatusEnumCaptured PosPaymentWalletDetailsStatusEnum = "captured"
PosPaymentWalletDetailsStatusEnumVoided PosPaymentWalletDetailsStatusEnum = "voided"
PosPaymentWalletDetailsStatusEnumFailed PosPaymentWalletDetailsStatusEnum = "failed"
PosPaymentWalletDetailsStatusEnumOther PosPaymentWalletDetailsStatusEnum = "other"
)


type PosPaymentWalletDetails struct {
    Status *PosPaymentWalletDetailsStatusEnum `json:"status,omitempty"`
    
}

type PosPayment struct {
    Amount float64 `json:"amount"`
    AppFee *float64 `json:"app_fee,omitempty"`
    Approved *float64 `json:"approved,omitempty"`
    BankAccount *PosBankAccount `json:"bank_account,omitempty"`
    CardDetails *PosPaymentCardDetails `json:"card_details,omitempty"`
    Cash *PosPaymentCashDetails `json:"cash,omitempty"`
    ChangeBackCashAmount *float64 `json:"change_back_cash_amount,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    Currency CurrencyEnum `json:"currency"`
    CustomerID string `json:"customer_id"`
    DeviceID *string `json:"device_id,omitempty"`
    EmployeeID *string `json:"employee_id,omitempty"`
    ExternalDetails *PosPaymentExternalDetails `json:"external_details,omitempty"`
    ExternalPaymentID *string `json:"external_payment_id,omitempty"`
    ID *string `json:"id,omitempty"`
    IdempotencyKey *string `json:"idempotency_key,omitempty"`
    LocationID *string `json:"location_id,omitempty"`
    MerchantID *string `json:"merchant_id,omitempty"`
    OrderID string `json:"order_id"`
    ProcessingFees []interface{} `json:"processing_fees,omitempty"`
    Refunded *float64 `json:"refunded,omitempty"`
    ServiceCharges []ServiceCharge `json:"service_charges,omitempty"`
    Source *PosPaymentSourceEnum `json:"source,omitempty"`
    SourceID string `json:"source_id"`
    Status *PosPaymentStatusEnum `json:"status,omitempty"`
    Tax *float64 `json:"tax,omitempty"`
    TenderID string `json:"tender_id"`
    Tip *float64 `json:"tip,omitempty"`
    Total *float64 `json:"total,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    UpdatedBy *string `json:"updated_by,omitempty"`
    Wallet *PosPaymentWalletDetails `json:"wallet,omitempty"`
    
}

