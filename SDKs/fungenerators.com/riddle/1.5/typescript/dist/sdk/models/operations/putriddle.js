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
var PutRiddleQueryParams = /** @class */ (function (_super) {
    __extends(PutRiddleQueryParams, _super);
    function PutRiddleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=answer" }),
        __metadata("design:type", String)
    ], PutRiddleQueryParams.prototype, "answer", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], PutRiddleQueryParams.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=question" }),
        __metadata("design:type", String)
    ], PutRiddleQueryParams.prototype, "question", void 0);
    return PutRiddleQueryParams;
}(SpeakeasyBase));
export { PutRiddleQueryParams };
var PutRiddleSecurity = /** @class */ (function (_super) {
    __extends(PutRiddleSecurity, _super);
    function PutRiddleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXFungeneratorsApiSecret)
    ], PutRiddleSecurity.prototype, "xFungeneratorsApiSecret", void 0);
    return PutRiddleSecurity;
}(SpeakeasyBase));
export { PutRiddleSecurity };
var PutRiddleRequest = /** @class */ (function (_super) {
    __extends(PutRiddleRequest, _super);
    function PutRiddleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutRiddleQueryParams)
    ], PutRiddleRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutRiddleSecurity)
    ], PutRiddleRequest.prototype, "security", void 0);
    return PutRiddleRequest;
}(SpeakeasyBase));
export { PutRiddleRequest };
var PutRiddleResponse = /** @class */ (function (_super) {
    __extends(PutRiddleResponse, _super);
    function PutRiddleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutRiddleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutRiddleResponse.prototype, "statusCode", void 0);
    return PutRiddleResponse;
}(SpeakeasyBase));
export { PutRiddleResponse };
