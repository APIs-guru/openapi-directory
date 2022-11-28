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
var PutOrdersIdStatusPathParams = /** @class */ (function (_super) {
    __extends(PutOrdersIdStatusPathParams, _super);
    function PutOrdersIdStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutOrdersIdStatusPathParams.prototype, "id", void 0);
    return PutOrdersIdStatusPathParams;
}(SpeakeasyBase));
export { PutOrdersIdStatusPathParams };
var PutOrdersIdStatusStatusTypeSimpleV2Status = /** @class */ (function (_super) {
    __extends(PutOrdersIdStatusStatusTypeSimpleV2Status, _super);
    function PutOrdersIdStatusStatusTypeSimpleV2Status() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PutOrdersIdStatusStatusTypeSimpleV2Status.prototype, "code", void 0);
    return PutOrdersIdStatusStatusTypeSimpleV2Status;
}(SpeakeasyBase));
export { PutOrdersIdStatusStatusTypeSimpleV2Status };
var PutOrdersIdStatusStatusTypeSimpleV2 = /** @class */ (function (_super) {
    __extends(PutOrdersIdStatusStatusTypeSimpleV2, _super);
    function PutOrdersIdStatusStatusTypeSimpleV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], PutOrdersIdStatusStatusTypeSimpleV2.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", PutOrdersIdStatusStatusTypeSimpleV2Status)
    ], PutOrdersIdStatusStatusTypeSimpleV2.prototype, "status", void 0);
    return PutOrdersIdStatusStatusTypeSimpleV2;
}(SpeakeasyBase));
export { PutOrdersIdStatusStatusTypeSimpleV2 };
var PutOrdersIdStatusSecurity = /** @class */ (function (_super) {
    __extends(PutOrdersIdStatusSecurity, _super);
    function PutOrdersIdStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeFdcAuth)
    ], PutOrdersIdStatusSecurity.prototype, "fdcAuth", void 0);
    return PutOrdersIdStatusSecurity;
}(SpeakeasyBase));
export { PutOrdersIdStatusSecurity };
var PutOrdersIdStatusRequest = /** @class */ (function (_super) {
    __extends(PutOrdersIdStatusRequest, _super);
    function PutOrdersIdStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutOrdersIdStatusPathParams)
    ], PutOrdersIdStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutOrdersIdStatusStatusTypeSimpleV2)
    ], PutOrdersIdStatusRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutOrdersIdStatusSecurity)
    ], PutOrdersIdStatusRequest.prototype, "security", void 0);
    return PutOrdersIdStatusRequest;
}(SpeakeasyBase));
export { PutOrdersIdStatusRequest };
var PutOrdersIdStatusResponse = /** @class */ (function (_super) {
    __extends(PutOrdersIdStatusResponse, _super);
    function PutOrdersIdStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutOrdersIdStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutOrdersIdStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OneordersPostResponses201ContentApplication1jsonSchema)
    ], PutOrdersIdStatusResponse.prototype, "oneordersPostResponses201ContentApplication1jsonSchema", void 0);
    return PutOrdersIdStatusResponse;
}(SpeakeasyBase));
export { PutOrdersIdStatusResponse };
