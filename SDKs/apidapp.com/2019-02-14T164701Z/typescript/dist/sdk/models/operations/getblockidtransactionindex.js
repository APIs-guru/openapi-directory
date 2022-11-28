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
var GetBlockIdTransactionIndexPathParams = /** @class */ (function (_super) {
    __extends(GetBlockIdTransactionIndexPathParams, _super);
    function GetBlockIdTransactionIndexPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetBlockIdTransactionIndexPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" }),
        __metadata("design:type", String)
    ], GetBlockIdTransactionIndexPathParams.prototype, "index", void 0);
    return GetBlockIdTransactionIndexPathParams;
}(SpeakeasyBase));
export { GetBlockIdTransactionIndexPathParams };
var GetBlockIdTransactionIndexSecurity = /** @class */ (function (_super) {
    __extends(GetBlockIdTransactionIndexSecurity, _super);
    function GetBlockIdTransactionIndexSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey2)
    ], GetBlockIdTransactionIndexSecurity.prototype, "key2", void 0);
    return GetBlockIdTransactionIndexSecurity;
}(SpeakeasyBase));
export { GetBlockIdTransactionIndexSecurity };
var GetBlockIdTransactionIndexRequest = /** @class */ (function (_super) {
    __extends(GetBlockIdTransactionIndexRequest, _super);
    function GetBlockIdTransactionIndexRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBlockIdTransactionIndexPathParams)
    ], GetBlockIdTransactionIndexRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBlockIdTransactionIndexSecurity)
    ], GetBlockIdTransactionIndexRequest.prototype, "security", void 0);
    return GetBlockIdTransactionIndexRequest;
}(SpeakeasyBase));
export { GetBlockIdTransactionIndexRequest };
var GetBlockIdTransactionIndexResponse = /** @class */ (function (_super) {
    __extends(GetBlockIdTransactionIndexResponse, _super);
    function GetBlockIdTransactionIndexResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBlockIdTransactionIndexResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetBlockIdTransactionIndexResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetBlockIdTransactionIndexResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBlockIdTransactionIndexResponse.prototype, "statusCode", void 0);
    return GetBlockIdTransactionIndexResponse;
}(SpeakeasyBase));
export { GetBlockIdTransactionIndexResponse };
