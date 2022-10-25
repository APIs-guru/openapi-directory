from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import _1accounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency


@dataclass_json
@dataclass
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    card_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardId' }})
    emboss_business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embossBusinessName' }})
    emboss_card_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embossCardName' }})
    expiry_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    masked_pan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maskedPan' }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    

@dataclass_json
@dataclass
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade:
    buy_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyAmount' }})
    buy_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyCurrency' }})
    fixed_side: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedSide' }})
    rate4d: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate4d' }})
    sell_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellAmount' }})
    sell_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellCurrency' }})
    

@dataclass_json
@dataclass
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount:
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bic' }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iban' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    nsc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsc' }})
    
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum(str, Enum):
    FIRE_ACCOUNT = "FIRE_ACCOUNT"


@dataclass_json
@dataclass
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccount:
    account: Optional[Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    type: Optional[Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount:
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bic' }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iban' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    nsc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsc' }})
    
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum(str, Enum):
    EXTERNAL_ACCOUNT = "EXTERNAL_ACCOUNT"


@dataclass_json
@dataclass
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccount:
    account: Optional[Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    type: Optional[Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount:
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bic' }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iban' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    nsc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsc' }})
    
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum(str, Enum):
    WITHDRAWAL_ACCOUNT = "WITHDRAWAL_ACCOUNT"


@dataclass_json
@dataclass
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayee:
    account: Optional[Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    type: Optional[Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant:
    acquirer_id_de32: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acquirerIdDe32' }})
    additional_amt_de54: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalAmtDe54' }})
    additional_data_de124: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalDataDe124' }})
    additional_data_de48: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalDataDe48' }})
    auth_code_de38: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authCodeDe38' }})
    authorised_by_gps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorisedByGps' }})
    avs_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avsResult' }})
    bill_amt: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billAmt' }})
    bill_ccy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billCcy' }})
    expiry_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryDate' }})
    mcc_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mccCode' }})
    merch_id_de42: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchIdDe42' }})
    merch_name_de43: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchNameDe43' }})
    mt_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mtId' }})
    pos_data_de22: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posDataDe22' }})
    pos_data_de61: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posDataDe61' }})
    pos_termnl_de41: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posTermnlDe41' }})
    proc_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'procCode' }})
    record_data_de120: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordDataDe120' }})
    resp_code_de39: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'respCodeDe39' }})
    ret_ref_no_de37: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retRefNoDe37' }})
    status_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    txn_amt4d: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txnAmt4d' }})
    txn_ccy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txnCcy' }})
    txn_ctry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txnCtry' }})
    txn_desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txnDesc' }})
    txn_stat_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txnStatCode' }})
    txn_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txnType' }})
    
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum(str, Enum):
    CARD_MERCHANT = "CARD_MERCHANT"
    CARD_ATM = "CARD_ATM"


@dataclass_json
@dataclass
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment:
    card_merchant: Optional[Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardMerchant' }})
    type: Optional[Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema:
    amount_after_charges: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountAfterCharges' }})
    amount_before_charges: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountBeforeCharges' }})
    balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    card: Optional[Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card' }})
    currency: Optional[_1accounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_acknowledged: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateAcknowledged', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fee_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feeAmount' }})
    fx_trade_details: Optional[Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fxTradeDetails' }})
    ican: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ican' }})
    my_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'myRef' }})
    payment_request_public_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentRequestPublicCode' }})
    ref_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refId' }})
    related_party: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedParty' }})
    tax_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxAmount' }})
    txn_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txnId' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
