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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetFactOnthisdayEventQueryParams = /** @class */ (function (_super) {
    __extends(GetFactOnthisdayEventQueryParams, _super);
    function GetFactOnthisdayEventQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=day" }),
        __metadata("design:type", String)
    ], GetFactOnthisdayEventQueryParams.prototype, "day", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=month" }),
        __metadata("design:type", String)
    ], GetFactOnthisdayEventQueryParams.prototype, "month", void 0);
    return GetFactOnthisdayEventQueryParams;
}(SpeakeasyBase));
export { GetFactOnthisdayEventQueryParams };
var GetFactOnthisdayEventSecurity = /** @class */ (function (_super) {
    __extends(GetFactOnthisdayEventSecurity, _super);
    function GetFactOnthisdayEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXFungeneratorsApiSecret)
    ], GetFactOnthisdayEventSecurity.prototype, "xFungeneratorsApiSecret", void 0);
    return GetFactOnthisdayEventSecurity;
}(SpeakeasyBase));
export { GetFactOnthisdayEventSecurity };
var GetFactOnthisdayEventRequest = /** @class */ (function (_super) {
    __extends(GetFactOnthisdayEventRequest, _super);
    function GetFactOnthisdayEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFactOnthisdayEventQueryParams)
    ], GetFactOnthisdayEventRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFactOnthisdayEventSecurity)
    ], GetFactOnthisdayEventRequest.prototype, "security", void 0);
    return GetFactOnthisdayEventRequest;
}(SpeakeasyBase));
export { GetFactOnthisdayEventRequest };
var GetFactOnthisdayEventResponse = /** @class */ (function (_super) {
    __extends(GetFactOnthisdayEventResponse, _super);
    function GetFactOnthisdayEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFactOnthisdayEventResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFactOnthisdayEventResponse.prototype, "statusCode", void 0);
    return GetFactOnthisdayEventResponse;
}(SpeakeasyBase));
export { GetFactOnthisdayEventResponse };
