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
import * as shared from "../shared";
var GetAllSshKeysQueryParams = /** @class */ (function (_super) {
    __extends(GetAllSshKeysQueryParams, _super);
    function GetAllSshKeysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], GetAllSshKeysQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" }),
        __metadata("design:type", Number)
    ], GetAllSshKeysQueryParams.prototype, "take", void 0);
    return GetAllSshKeysQueryParams;
}(SpeakeasyBase));
export { GetAllSshKeysQueryParams };
var GetAllSshKeysRequest = /** @class */ (function (_super) {
    __extends(GetAllSshKeysRequest, _super);
    function GetAllSshKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllSshKeysQueryParams)
    ], GetAllSshKeysRequest.prototype, "queryParams", void 0);
    return GetAllSshKeysRequest;
}(SpeakeasyBase));
export { GetAllSshKeysRequest };
var GetAllSshKeysResponse = /** @class */ (function (_super) {
    __extends(GetAllSshKeysResponse, _super);
    function GetAllSshKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllSshKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetAllSshKeysResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SshKeyDetail }),
        __metadata("design:type", Array)
    ], GetAllSshKeysResponse.prototype, "sshKeyDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllSshKeysResponse.prototype, "statusCode", void 0);
    return GetAllSshKeysResponse;
}(SpeakeasyBase));
export { GetAllSshKeysResponse };
