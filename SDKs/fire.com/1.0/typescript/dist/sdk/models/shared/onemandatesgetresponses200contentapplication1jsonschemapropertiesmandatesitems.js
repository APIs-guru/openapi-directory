var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency } from "./oneaccountsgetresponses200contentapplication1jsonschemapropertiesaccountsitemspropertiescurrency";
export var OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum;
(function (OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum) {
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["AccountDoesNotAcceptDirectDebits"] = "ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["Ddic"] = "DDIC";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["AccountNotFound"] = "ACCOUNT_NOT_FOUND";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["AccountNotLive"] = "ACCOUNT_NOT_LIVE";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["CustomerNotFound"] = "CUSTOMER_NOT_FOUND";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["BusinessNotLive"] = "BUSINESS_NOT_LIVE";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["BusinessNotFull"] = "BUSINESS_NOT_FULL";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["PersonalUserNotLive"] = "PERSONAL_USER_NOT_LIVE";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["PersonalUserNotFull"] = "PERSONAL_USER_NOT_FULL";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["MandateAlreadyExists"] = "MANDATE_ALREADY_EXISTS";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["MandateWithDiferentAccount"] = "MANDATE_WITH_DIFERENT_ACCOUNT";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["NullMandateReference"] = "NULL_MANDATE_REFERENCE";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["InvalidAccountCurrency"] = "INVALID_ACCOUNT_CURRENCY";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["InvalidMandateReference"] = "INVALID_MANDATE_REFERENCE";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["RequestedByCustomerViaSupport"] = "REQUESTED_BY_CUSTOMER_VIA_SUPPORT";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["CustomerAccountClosed"] = "CUSTOMER_ACCOUNT_CLOSED";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["CustomerDeceased"] = "CUSTOMER_DECEASED";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["AccountTransferred"] = "ACCOUNT_TRANSFERRED";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["MandateNotFound"] = "MANDATE_NOT_FOUND";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["AccountTransferredToDifferentAccount"] = "ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["InvalidAccountType"] = "INVALID_ACCOUNT_TYPE";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["MandateExpired"] = "MANDATE_EXPIRED";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["MandateCancelled"] = "MANDATE_CANCELLED";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum["RequestedByCustomer"] = "REQUESTED_BY_CUSTOMER";
})(OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum || (OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsFireRejectionReasonEnum = {}));
export var OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum;
(function (OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum) {
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum["Created"] = "CREATED";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum["Live"] = "LIVE";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum["RejectRequested"] = "REJECT_REQUESTED";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum["RejectRecordInProgress"] = "REJECT_RECORD_IN_PROGRESS";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum["RejectRecorded"] = "REJECT_RECORDED";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum["RejectFileCreated"] = "REJECT_FILE_CREATED";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum["RejectFileSent"] = "REJECT_FILE_SENT";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum["CancelRequested"] = "CANCEL_REQUESTED";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum["CancelRecordInProgress"] = "CANCEL_RECORD_IN_PROGRESS";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum["CancelRecorded"] = "CANCEL_RECORDED";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum["CancelFileCreated"] = "CANCEL_FILE_CREATED";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum["CancelFileSent"] = "CANCEL_FILE_SENT";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum["Complete"] = "COMPLETE";
    OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum["Dormant"] = "DORMANT";
})(OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum || (OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItemsStatusEnum = {}));
var OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems = /** @class */ (function (_super) {
    __extends(OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems, _super);
    function OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateCancelled" }),
        __metadata("design:type", Date)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "dateCancelled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateCompleted" }),
        __metadata("design:type", Date)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "dateCompleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateCreated" }),
        __metadata("design:type", Date)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fireRejectionReason" }),
        __metadata("design:type", String)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "fireRejectionReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestDirectDebitAmount" }),
        __metadata("design:type", Number)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "latestDirectDebitAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestDirectDebitDate" }),
        __metadata("design:type", Date)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "latestDirectDebitDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mandateReference" }),
        __metadata("design:type", String)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "mandateReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mandateUuid" }),
        __metadata("design:type", String)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "mandateUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfDirectDebitCollected" }),
        __metadata("design:type", Number)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "numberOfDirectDebitCollected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatorAlias" }),
        __metadata("design:type", String)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "originatorAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatorLogoUrlLarge" }),
        __metadata("design:type", String)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "originatorLogoUrlLarge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatorLogoUrlSmall" }),
        __metadata("design:type", String)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "originatorLogoUrlSmall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatorName" }),
        __metadata("design:type", String)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "originatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatorReference" }),
        __metadata("design:type", String)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "originatorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemeCancelReason" }),
        __metadata("design:type", String)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "schemeCancelReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemeCancelReasonCode" }),
        __metadata("design:type", String)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "schemeCancelReasonCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetIcan" }),
        __metadata("design:type", Number)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "targetIcan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueOfDirectDebitCollected" }),
        __metadata("design:type", Number)
    ], OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.prototype, "valueOfDirectDebitCollected", void 0);
    return OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems;
}(SpeakeasyBase));
export { OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems };
