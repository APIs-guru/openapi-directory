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
export var GetBatchesBatchStatusEnum;
(function (GetBatchesBatchStatusEnum) {
    GetBatchesBatchStatusEnum["Submitted"] = "SUBMITTED";
    GetBatchesBatchStatusEnum["Removed"] = "REMOVED";
    GetBatchesBatchStatusEnum["Succeeded"] = "SUCCEEDED";
    GetBatchesBatchStatusEnum["Failed"] = "FAILED";
})(GetBatchesBatchStatusEnum || (GetBatchesBatchStatusEnum = {}));
export var GetBatchesBatchTypesEnum;
(function (GetBatchesBatchTypesEnum) {
    GetBatchesBatchTypesEnum["InternalTransfer"] = "INTERNAL_TRANSFER";
    GetBatchesBatchTypesEnum["BankTransfer"] = "BANK_TRANSFER";
    GetBatchesBatchTypesEnum["NewPayee"] = "NEW_PAYEE";
})(GetBatchesBatchTypesEnum || (GetBatchesBatchTypesEnum = {}));
export var GetBatchesOrderEnum;
(function (GetBatchesOrderEnum) {
    GetBatchesOrderEnum["Desc"] = "DESC";
    GetBatchesOrderEnum["Asc"] = "ASC";
})(GetBatchesOrderEnum || (GetBatchesOrderEnum = {}));
export var GetBatchesOrderByEnum;
(function (GetBatchesOrderByEnum) {
    GetBatchesOrderByEnum["Date"] = "DATE";
})(GetBatchesOrderByEnum || (GetBatchesOrderByEnum = {}));
var GetBatchesQueryParams = /** @class */ (function (_super) {
    __extends(GetBatchesQueryParams, _super);
    function GetBatchesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=batchStatus" }),
        __metadata("design:type", String)
    ], GetBatchesQueryParams.prototype, "batchStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=batchTypes" }),
        __metadata("design:type", String)
    ], GetBatchesQueryParams.prototype, "batchTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetBatchesQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], GetBatchesQueryParams.prototype, "orderBy", void 0);
    return GetBatchesQueryParams;
}(SpeakeasyBase));
export { GetBatchesQueryParams };
// GetBatchesBatchItemsBatchItemResult
/**
 * The outcome of the attempted transaction.
**/
var GetBatchesBatchItemsBatchItemResult = /** @class */ (function (_super) {
    __extends(GetBatchesBatchItemsBatchItemResult, _super);
    function GetBatchesBatchItemsBatchItemResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetBatchesBatchItemsBatchItemResult.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetBatchesBatchItemsBatchItemResult.prototype, "message", void 0);
    return GetBatchesBatchItemsBatchItemResult;
}(SpeakeasyBase));
export { GetBatchesBatchItemsBatchItemResult };
export var GetBatchesBatchItemsBatchItemStatusEnum;
(function (GetBatchesBatchItemsBatchItemStatusEnum) {
    GetBatchesBatchItemsBatchItemStatusEnum["Submitted"] = "SUBMITTED";
    GetBatchesBatchItemsBatchItemStatusEnum["Removed"] = "REMOVED";
    GetBatchesBatchItemsBatchItemStatusEnum["Succeeded"] = "SUCCEEDED";
    GetBatchesBatchItemsBatchItemStatusEnum["Failed"] = "FAILED";
})(GetBatchesBatchItemsBatchItemStatusEnum || (GetBatchesBatchItemsBatchItemStatusEnum = {}));
var GetBatchesBatchItemsBatchItem = /** @class */ (function (_super) {
    __extends(GetBatchesBatchItemsBatchItem, _super);
    function GetBatchesBatchItemsBatchItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetBatchesBatchItemsBatchItem.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountAfterCharges" }),
        __metadata("design:type", Number)
    ], GetBatchesBatchItemsBatchItem.prototype, "amountAfterCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchItemUuid" }),
        __metadata("design:type", String)
    ], GetBatchesBatchItemsBatchItem.prototype, "batchItemUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateCreated" }),
        __metadata("design:type", Date)
    ], GetBatchesBatchItemsBatchItem.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feeAmount" }),
        __metadata("design:type", Number)
    ], GetBatchesBatchItemsBatchItem.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icanFrom" }),
        __metadata("design:type", Number)
    ], GetBatchesBatchItemsBatchItem.prototype, "icanFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icanTo" }),
        __metadata("design:type", Number)
    ], GetBatchesBatchItemsBatchItem.prototype, "icanTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], GetBatchesBatchItemsBatchItem.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], GetBatchesBatchItemsBatchItem.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refId" }),
        __metadata("design:type", Number)
    ], GetBatchesBatchItemsBatchItem.prototype, "refId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", GetBatchesBatchItemsBatchItemResult)
    ], GetBatchesBatchItemsBatchItem.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBatchesBatchItemsBatchItem.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxAmount" }),
        __metadata("design:type", Number)
    ], GetBatchesBatchItemsBatchItem.prototype, "taxAmount", void 0);
    return GetBatchesBatchItemsBatchItem;
}(SpeakeasyBase));
export { GetBatchesBatchItemsBatchItem };
var GetBatchesBatchItems = /** @class */ (function (_super) {
    __extends(GetBatchesBatchItems, _super);
    function GetBatchesBatchItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: GetBatchesBatchItemsBatchItem }),
        __metadata("design:type", Array)
    ], GetBatchesBatchItems.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetBatchesBatchItems.prototype, "total", void 0);
    return GetBatchesBatchItems;
}(SpeakeasyBase));
export { GetBatchesBatchItems };
var GetBatchesRequest = /** @class */ (function (_super) {
    __extends(GetBatchesRequest, _super);
    function GetBatchesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBatchesQueryParams)
    ], GetBatchesRequest.prototype, "queryParams", void 0);
    return GetBatchesRequest;
}(SpeakeasyBase));
export { GetBatchesRequest };
var GetBatchesResponse = /** @class */ (function (_super) {
    __extends(GetBatchesResponse, _super);
    function GetBatchesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBatchesBatchItems)
    ], GetBatchesResponse.prototype, "batchItems", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBatchesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBatchesResponse.prototype, "statusCode", void 0);
    return GetBatchesResponse;
}(SpeakeasyBase));
export { GetBatchesResponse };
