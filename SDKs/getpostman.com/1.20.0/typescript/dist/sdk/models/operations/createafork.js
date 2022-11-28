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
var CreateAForkPathParams = /** @class */ (function (_super) {
    __extends(CreateAForkPathParams, _super);
    function CreateAForkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_uid" }),
        __metadata("design:type", String)
    ], CreateAForkPathParams.prototype, "collectionUid", void 0);
    return CreateAForkPathParams;
}(SpeakeasyBase));
export { CreateAForkPathParams };
var CreateAForkQueryParams = /** @class */ (function (_super) {
    __extends(CreateAForkQueryParams, _super);
    function CreateAForkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" }),
        __metadata("design:type", String)
    ], CreateAForkQueryParams.prototype, "workspace", void 0);
    return CreateAForkQueryParams;
}(SpeakeasyBase));
export { CreateAForkQueryParams };
var CreateAForkRequestBody = /** @class */ (function (_super) {
    __extends(CreateAForkRequestBody, _super);
    function CreateAForkRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateAForkRequestBody.prototype, "name", void 0);
    return CreateAForkRequestBody;
}(SpeakeasyBase));
export { CreateAForkRequestBody };
var CreateAForkRequest = /** @class */ (function (_super) {
    __extends(CreateAForkRequest, _super);
    function CreateAForkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAForkPathParams)
    ], CreateAForkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAForkQueryParams)
    ], CreateAForkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAForkRequestBody)
    ], CreateAForkRequest.prototype, "request", void 0);
    return CreateAForkRequest;
}(SpeakeasyBase));
export { CreateAForkRequest };
var CreateAForkResponse = /** @class */ (function (_super) {
    __extends(CreateAForkResponse, _super);
    function CreateAForkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAForkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAForkResponse.prototype, "statusCode", void 0);
    return CreateAForkResponse;
}(SpeakeasyBase));
export { CreateAForkResponse };
