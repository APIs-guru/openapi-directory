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
var GetConnectorPathParams = /** @class */ (function (_super) {
    __extends(GetConnectorPathParams, _super);
    function GetConnectorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetConnectorPathParams.prototype, "id", void 0);
    return GetConnectorPathParams;
}(SpeakeasyBase));
export { GetConnectorPathParams };
var GetConnectorQueryParams = /** @class */ (function (_super) {
    __extends(GetConnectorQueryParams, _super);
    function GetConnectorQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_evse" }),
        __metadata("design:type", Boolean)
    ], GetConnectorQueryParams.prototype, "includeEvse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" }),
        __metadata("design:type", Boolean)
    ], GetConnectorQueryParams.prototype, "includeOrganization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_rate" }),
        __metadata("design:type", Boolean)
    ], GetConnectorQueryParams.prototype, "includeRate", void 0);
    return GetConnectorQueryParams;
}(SpeakeasyBase));
export { GetConnectorQueryParams };
var GetConnectorRequest = /** @class */ (function (_super) {
    __extends(GetConnectorRequest, _super);
    function GetConnectorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConnectorPathParams)
    ], GetConnectorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConnectorQueryParams)
    ], GetConnectorRequest.prototype, "queryParams", void 0);
    return GetConnectorRequest;
}(SpeakeasyBase));
export { GetConnectorRequest };
var GetConnectorResponse = /** @class */ (function (_super) {
    __extends(GetConnectorResponse, _super);
    function GetConnectorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConnectorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConnectorResponse.prototype, "statusCode", void 0);
    return GetConnectorResponse;
}(SpeakeasyBase));
export { GetConnectorResponse };
