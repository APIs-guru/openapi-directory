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
var Destiny2SearchDestinyEntitiesPathParams = /** @class */ (function (_super) {
    __extends(Destiny2SearchDestinyEntitiesPathParams, _super);
    function Destiny2SearchDestinyEntitiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=searchTerm" }),
        __metadata("design:type", String)
    ], Destiny2SearchDestinyEntitiesPathParams.prototype, "searchTerm", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], Destiny2SearchDestinyEntitiesPathParams.prototype, "type", void 0);
    return Destiny2SearchDestinyEntitiesPathParams;
}(SpeakeasyBase));
export { Destiny2SearchDestinyEntitiesPathParams };
var Destiny2SearchDestinyEntitiesQueryParams = /** @class */ (function (_super) {
    __extends(Destiny2SearchDestinyEntitiesQueryParams, _super);
    function Destiny2SearchDestinyEntitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], Destiny2SearchDestinyEntitiesQueryParams.prototype, "page", void 0);
    return Destiny2SearchDestinyEntitiesQueryParams;
}(SpeakeasyBase));
export { Destiny2SearchDestinyEntitiesQueryParams };
var Destiny2SearchDestinyEntitiesRequest = /** @class */ (function (_super) {
    __extends(Destiny2SearchDestinyEntitiesRequest, _super);
    function Destiny2SearchDestinyEntitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Destiny2SearchDestinyEntitiesPathParams)
    ], Destiny2SearchDestinyEntitiesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Destiny2SearchDestinyEntitiesQueryParams)
    ], Destiny2SearchDestinyEntitiesRequest.prototype, "queryParams", void 0);
    return Destiny2SearchDestinyEntitiesRequest;
}(SpeakeasyBase));
export { Destiny2SearchDestinyEntitiesRequest };
var Destiny2SearchDestinyEntitiesResponse = /** @class */ (function (_super) {
    __extends(Destiny2SearchDestinyEntitiesResponse, _super);
    function Destiny2SearchDestinyEntitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2SearchDestinyEntitiesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], Destiny2SearchDestinyEntitiesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], Destiny2SearchDestinyEntitiesResponse.prototype, "statusCode", void 0);
    return Destiny2SearchDestinyEntitiesResponse;
}(SpeakeasyBase));
export { Destiny2SearchDestinyEntitiesResponse };
