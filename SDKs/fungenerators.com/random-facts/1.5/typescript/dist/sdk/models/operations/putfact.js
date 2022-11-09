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
var PutFactQueryParams = /** @class */ (function (_super) {
    __extends(PutFactQueryParams, _super);
    function PutFactQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], PutFactQueryParams.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fact" }),
        __metadata("design:type", String)
    ], PutFactQueryParams.prototype, "fact", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=subcategory" }),
        __metadata("design:type", String)
    ], PutFactQueryParams.prototype, "subcategory", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], PutFactQueryParams.prototype, "tags", void 0);
    return PutFactQueryParams;
}(SpeakeasyBase));
export { PutFactQueryParams };
var PutFactSecurity = /** @class */ (function (_super) {
    __extends(PutFactSecurity, _super);
    function PutFactSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXFungeneratorsApiSecret)
    ], PutFactSecurity.prototype, "xFungeneratorsApiSecret", void 0);
    return PutFactSecurity;
}(SpeakeasyBase));
export { PutFactSecurity };
var PutFactRequest = /** @class */ (function (_super) {
    __extends(PutFactRequest, _super);
    function PutFactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutFactQueryParams)
    ], PutFactRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutFactSecurity)
    ], PutFactRequest.prototype, "security", void 0);
    return PutFactRequest;
}(SpeakeasyBase));
export { PutFactRequest };
var PutFactResponse = /** @class */ (function (_super) {
    __extends(PutFactResponse, _super);
    function PutFactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutFactResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutFactResponse.prototype, "statusCode", void 0);
    return PutFactResponse;
}(SpeakeasyBase));
export { PutFactResponse };
