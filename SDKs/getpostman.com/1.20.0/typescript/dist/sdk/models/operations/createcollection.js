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
var CreateCollectionRequestBodyCollectionInfo = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBodyCollectionInfo, _super);
    function CreateCollectionRequestBodyCollectionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionInfo.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionInfo.prototype, "schema", void 0);
    return CreateCollectionRequestBodyCollectionInfo;
}(SpeakeasyBase));
export { CreateCollectionRequestBodyCollectionInfo };
var CreateCollectionRequestBodyCollectionItemItemRequestBody = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBodyCollectionItemItemRequestBody, _super);
    function CreateCollectionRequestBodyCollectionItemItemRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItemRequestBody.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItemRequestBody.prototype, "raw", void 0);
    return CreateCollectionRequestBodyCollectionItemItemRequestBody;
}(SpeakeasyBase));
export { CreateCollectionRequestBodyCollectionItemItemRequestBody };
var CreateCollectionRequestBodyCollectionItemItemRequestHeader = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBodyCollectionItemItemRequestHeader, _super);
    function CreateCollectionRequestBodyCollectionItemItemRequestHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItemRequestHeader.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItemRequestHeader.prototype, "value", void 0);
    return CreateCollectionRequestBodyCollectionItemItemRequestHeader;
}(SpeakeasyBase));
export { CreateCollectionRequestBodyCollectionItemItemRequestHeader };
var CreateCollectionRequestBodyCollectionItemItemRequest = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBodyCollectionItemItemRequest, _super);
    function CreateCollectionRequestBodyCollectionItemItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", CreateCollectionRequestBodyCollectionItemItemRequestBody)
    ], CreateCollectionRequestBodyCollectionItemItemRequest.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItemRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header", elemType: CreateCollectionRequestBodyCollectionItemItemRequestHeader }),
        __metadata("design:type", Array)
    ], CreateCollectionRequestBodyCollectionItemItemRequest.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItemRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItemRequest.prototype, "url", void 0);
    return CreateCollectionRequestBodyCollectionItemItemRequest;
}(SpeakeasyBase));
export { CreateCollectionRequestBodyCollectionItemItemRequest };
var CreateCollectionRequestBodyCollectionItemItem = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBodyCollectionItemItem, _super);
    function CreateCollectionRequestBodyCollectionItemItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItem.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", CreateCollectionRequestBodyCollectionItemItemRequest)
    ], CreateCollectionRequestBodyCollectionItemItem.prototype, "request", void 0);
    return CreateCollectionRequestBodyCollectionItemItem;
}(SpeakeasyBase));
export { CreateCollectionRequestBodyCollectionItemItem };
var CreateCollectionRequestBodyCollectionItem = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBodyCollectionItem, _super);
    function CreateCollectionRequestBodyCollectionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item", elemType: CreateCollectionRequestBodyCollectionItemItem }),
        __metadata("design:type", Array)
    ], CreateCollectionRequestBodyCollectionItem.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItem.prototype, "name", void 0);
    return CreateCollectionRequestBodyCollectionItem;
}(SpeakeasyBase));
export { CreateCollectionRequestBodyCollectionItem };
var CreateCollectionRequestBodyCollection = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBodyCollection, _super);
    function CreateCollectionRequestBodyCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", CreateCollectionRequestBodyCollectionInfo)
    ], CreateCollectionRequestBodyCollection.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item", elemType: CreateCollectionRequestBodyCollectionItem }),
        __metadata("design:type", Array)
    ], CreateCollectionRequestBodyCollection.prototype, "item", void 0);
    return CreateCollectionRequestBodyCollection;
}(SpeakeasyBase));
export { CreateCollectionRequestBodyCollection };
var CreateCollectionRequestBody = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBody, _super);
    function CreateCollectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collection" }),
        __metadata("design:type", CreateCollectionRequestBodyCollection)
    ], CreateCollectionRequestBody.prototype, "collection", void 0);
    return CreateCollectionRequestBody;
}(SpeakeasyBase));
export { CreateCollectionRequestBody };
var CreateCollection200ApplicationJsonCollection = /** @class */ (function (_super) {
    __extends(CreateCollection200ApplicationJsonCollection, _super);
    function CreateCollection200ApplicationJsonCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateCollection200ApplicationJsonCollection.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCollection200ApplicationJsonCollection.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], CreateCollection200ApplicationJsonCollection.prototype, "uid", void 0);
    return CreateCollection200ApplicationJsonCollection;
}(SpeakeasyBase));
export { CreateCollection200ApplicationJsonCollection };
var CreateCollection200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateCollection200ApplicationJson, _super);
    function CreateCollection200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collection" }),
        __metadata("design:type", CreateCollection200ApplicationJsonCollection)
    ], CreateCollection200ApplicationJson.prototype, "collection", void 0);
    return CreateCollection200ApplicationJson;
}(SpeakeasyBase));
export { CreateCollection200ApplicationJson };
var CreateCollection400ApplicationJsonError = /** @class */ (function (_super) {
    __extends(CreateCollection400ApplicationJsonError, _super);
    function CreateCollection400ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateCollection400ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCollection400ApplicationJsonError.prototype, "name", void 0);
    return CreateCollection400ApplicationJsonError;
}(SpeakeasyBase));
export { CreateCollection400ApplicationJsonError };
var CreateCollection400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateCollection400ApplicationJson, _super);
    function CreateCollection400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", CreateCollection400ApplicationJsonError)
    ], CreateCollection400ApplicationJson.prototype, "error", void 0);
    return CreateCollection400ApplicationJson;
}(SpeakeasyBase));
export { CreateCollection400ApplicationJson };
var CreateCollectionRequest = /** @class */ (function (_super) {
    __extends(CreateCollectionRequest, _super);
    function CreateCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCollectionRequestBody)
    ], CreateCollectionRequest.prototype, "request", void 0);
    return CreateCollectionRequest;
}(SpeakeasyBase));
export { CreateCollectionRequest };
var CreateCollectionResponse = /** @class */ (function (_super) {
    __extends(CreateCollectionResponse, _super);
    function CreateCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCollectionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCollection200ApplicationJson)
    ], CreateCollectionResponse.prototype, "createCollection200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCollection400ApplicationJson)
    ], CreateCollectionResponse.prototype, "createCollection400ApplicationJsonObject", void 0);
    return CreateCollectionResponse;
}(SpeakeasyBase));
export { CreateCollectionResponse };
