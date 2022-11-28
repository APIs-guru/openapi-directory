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
// PullDocResponseDocDetails
/**
 * Issuer can add meta content specific to document here.
**/
var PullDocResponseDocDetails = /** @class */ (function (_super) {
    __extends(PullDocResponseDocDetails, _super);
    function PullDocResponseDocDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullDocResponseDocDetails.prototype, "dataContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullDocResponseDocDetails.prototype, "docContent", void 0);
    return PullDocResponseDocDetails;
}(SpeakeasyBase));
export { PullDocResponseDocDetails };
var PullDocResponseResponseStatus = /** @class */ (function (_super) {
    __extends(PullDocResponseResponseStatus, _super);
    function PullDocResponseResponseStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullDocResponseResponseStatus.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullDocResponseResponseStatus.prototype, "ts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullDocResponseResponseStatus.prototype, "txn", void 0);
    return PullDocResponseResponseStatus;
}(SpeakeasyBase));
export { PullDocResponseResponseStatus };
var PullDocResponse = /** @class */ (function (_super) {
    __extends(PullDocResponse, _super);
    function PullDocResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullDocResponseDocDetails)
    ], PullDocResponse.prototype, "docDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullDocResponseResponseStatus)
    ], PullDocResponse.prototype, "responseStatus", void 0);
    return PullDocResponse;
}(SpeakeasyBase));
export { PullDocResponse };
