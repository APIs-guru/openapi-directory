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
var GetListofApproversForBatchPathParams = /** @class */ (function (_super) {
    __extends(GetListofApproversForBatchPathParams, _super);
    function GetListofApproversForBatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" }),
        __metadata("design:type", String)
    ], GetListofApproversForBatchPathParams.prototype, "batchUuid", void 0);
    return GetListofApproversForBatchPathParams;
}(SpeakeasyBase));
export { GetListofApproversForBatchPathParams };
var GetListofApproversForBatchBatchApproversApprovals = /** @class */ (function (_super) {
    __extends(GetListofApproversForBatchBatchApproversApprovals, _super);
    function GetListofApproversForBatchBatchApproversApprovals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailAddress" }),
        __metadata("design:type", String)
    ], GetListofApproversForBatchBatchApproversApprovals.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], GetListofApproversForBatchBatchApproversApprovals.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], GetListofApproversForBatchBatchApproversApprovals.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], GetListofApproversForBatchBatchApproversApprovals.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileNumber" }),
        __metadata("design:type", String)
    ], GetListofApproversForBatchBatchApproversApprovals.prototype, "mobileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetListofApproversForBatchBatchApproversApprovals.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", Number)
    ], GetListofApproversForBatchBatchApproversApprovals.prototype, "userId", void 0);
    return GetListofApproversForBatchBatchApproversApprovals;
}(SpeakeasyBase));
export { GetListofApproversForBatchBatchApproversApprovals };
var GetListofApproversForBatchBatchApprovers = /** @class */ (function (_super) {
    __extends(GetListofApproversForBatchBatchApprovers, _super);
    function GetListofApproversForBatchBatchApprovers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvals", elemType: GetListofApproversForBatchBatchApproversApprovals }),
        __metadata("design:type", Array)
    ], GetListofApproversForBatchBatchApprovers.prototype, "approvals", void 0);
    return GetListofApproversForBatchBatchApprovers;
}(SpeakeasyBase));
export { GetListofApproversForBatchBatchApprovers };
var GetListofApproversForBatchRequest = /** @class */ (function (_super) {
    __extends(GetListofApproversForBatchRequest, _super);
    function GetListofApproversForBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListofApproversForBatchPathParams)
    ], GetListofApproversForBatchRequest.prototype, "pathParams", void 0);
    return GetListofApproversForBatchRequest;
}(SpeakeasyBase));
export { GetListofApproversForBatchRequest };
var GetListofApproversForBatchResponse = /** @class */ (function (_super) {
    __extends(GetListofApproversForBatchResponse, _super);
    function GetListofApproversForBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListofApproversForBatchBatchApprovers)
    ], GetListofApproversForBatchResponse.prototype, "batchApprovers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListofApproversForBatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListofApproversForBatchResponse.prototype, "statusCode", void 0);
    return GetListofApproversForBatchResponse;
}(SpeakeasyBase));
export { GetListofApproversForBatchResponse };
