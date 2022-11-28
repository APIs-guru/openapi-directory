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
export var DomainsGetTypeEnum;
(function (DomainsGetTypeEnum) {
    DomainsGetTypeEnum["System"] = "system";
    DomainsGetTypeEnum["Go"] = "go";
    DomainsGetTypeEnum["Personal"] = "personal";
    DomainsGetTypeEnum["Dedicated"] = "dedicated";
})(DomainsGetTypeEnum || (DomainsGetTypeEnum = {}));
var DomainsGetQueryParams = /** @class */ (function (_super) {
    __extends(DomainsGetQueryParams, _super);
    function DomainsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DomainsGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DomainsGetQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DomainsGetQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DomainsGetQueryParams.prototype, "type", void 0);
    return DomainsGetQueryParams;
}(SpeakeasyBase));
export { DomainsGetQueryParams };
var DomainsGetRequest = /** @class */ (function (_super) {
    __extends(DomainsGetRequest, _super);
    function DomainsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsGetQueryParams)
    ], DomainsGetRequest.prototype, "queryParams", void 0);
    return DomainsGetRequest;
}(SpeakeasyBase));
export { DomainsGetRequest };
var DomainsGetResponse = /** @class */ (function (_super) {
    __extends(DomainsGetResponse, _super);
    function DomainsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64)
    ], DomainsGetResponse.prototype, "apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DomainsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DomainsGetResponse.prototype, "statusCode", void 0);
    return DomainsGetResponse;
}(SpeakeasyBase));
export { DomainsGetResponse };
