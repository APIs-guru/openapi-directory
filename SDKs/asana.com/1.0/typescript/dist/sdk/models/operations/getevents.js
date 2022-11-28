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
var GetEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetEventsQueryParams, _super);
    function GetEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetEventsQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetEventsQueryParams.prototype, "optPretty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sync" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "sync", void 0);
    return GetEventsQueryParams;
}(SpeakeasyBase));
export { GetEventsQueryParams };
// GetEvents200ApplicationJson
/**
 * The full record for all events that have occurred since the sync token was created.
**/
var GetEvents200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEvents200ApplicationJson, _super);
    function GetEvents200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.EventResponse }),
        __metadata("design:type", Array)
    ], GetEvents200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sync" }),
        __metadata("design:type", String)
    ], GetEvents200ApplicationJson.prototype, "sync", void 0);
    return GetEvents200ApplicationJson;
}(SpeakeasyBase));
export { GetEvents200ApplicationJson };
var GetEventsRequest = /** @class */ (function (_super) {
    __extends(GetEventsRequest, _super);
    function GetEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsQueryParams)
    ], GetEventsRequest.prototype, "queryParams", void 0);
    return GetEventsRequest;
}(SpeakeasyBase));
export { GetEventsRequest };
var GetEventsResponse = /** @class */ (function (_super) {
    __extends(GetEventsResponse, _super);
    function GetEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetEventsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEvents200ApplicationJson)
    ], GetEventsResponse.prototype, "getEvents200ApplicationJsonObject", void 0);
    return GetEventsResponse;
}(SpeakeasyBase));
export { GetEventsResponse };
