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
var MetaGetOctocatQueryParams = /** @class */ (function (_super) {
    __extends(MetaGetOctocatQueryParams, _super);
    function MetaGetOctocatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=s" }),
        __metadata("design:type", String)
    ], MetaGetOctocatQueryParams.prototype, "s", void 0);
    return MetaGetOctocatQueryParams;
}(SpeakeasyBase));
export { MetaGetOctocatQueryParams };
var MetaGetOctocatRequest = /** @class */ (function (_super) {
    __extends(MetaGetOctocatRequest, _super);
    function MetaGetOctocatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetaGetOctocatQueryParams)
    ], MetaGetOctocatRequest.prototype, "queryParams", void 0);
    return MetaGetOctocatRequest;
}(SpeakeasyBase));
export { MetaGetOctocatRequest };
var MetaGetOctocatResponse = /** @class */ (function (_super) {
    __extends(MetaGetOctocatResponse, _super);
    function MetaGetOctocatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetaGetOctocatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MetaGetOctocatResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetaGetOctocatResponse.prototype, "metaGetOctocat200ApplicationOctocatStreamString", void 0);
    return MetaGetOctocatResponse;
}(SpeakeasyBase));
export { MetaGetOctocatResponse };
