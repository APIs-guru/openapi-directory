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
// PullUriResponseDocDetails
/**
 * Issuer can add meta content specific to document here.
**/
var PullUriResponseDocDetails = /** @class */ (function (_super) {
    __extends(PullUriResponseDocDetails, _super);
    function PullUriResponseDocDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullUriResponseDocDetails.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullUriResponseDocDetails.prototype, "dataContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullUriResponseDocDetails.prototype, "digiLockerId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullUriResponseDocDetails.prototype, "docContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullUriResponseDocDetails.prototype, "docType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullUriResponseDocDetails.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullUriResponseDocDetails.prototype, "udf1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullUriResponseDocDetails.prototype, "udf2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullUriResponseDocDetails.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullUriResponseDocDetails.prototype, "uri", void 0);
    return PullUriResponseDocDetails;
}(SpeakeasyBase));
export { PullUriResponseDocDetails };
var PullUriResponseResponseStatus = /** @class */ (function (_super) {
    __extends(PullUriResponseResponseStatus, _super);
    function PullUriResponseResponseStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullUriResponseResponseStatus.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullUriResponseResponseStatus.prototype, "ts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullUriResponseResponseStatus.prototype, "txn", void 0);
    return PullUriResponseResponseStatus;
}(SpeakeasyBase));
export { PullUriResponseResponseStatus };
var PullUriResponse = /** @class */ (function (_super) {
    __extends(PullUriResponse, _super);
    function PullUriResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullUriResponseDocDetails)
    ], PullUriResponse.prototype, "docDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullUriResponseResponseStatus)
    ], PullUriResponse.prototype, "responseStatus", void 0);
    return PullUriResponse;
}(SpeakeasyBase));
export { PullUriResponse };
