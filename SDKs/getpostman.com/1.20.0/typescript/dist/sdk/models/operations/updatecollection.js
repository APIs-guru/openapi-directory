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
var UpdateCollectionPathParams = /** @class */ (function (_super) {
    __extends(UpdateCollectionPathParams, _super);
    function UpdateCollectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_uid" }),
        __metadata("design:type", String)
    ], UpdateCollectionPathParams.prototype, "collectionUid", void 0);
    return UpdateCollectionPathParams;
}(SpeakeasyBase));
export { UpdateCollectionPathParams };
var UpdateCollectionRequestBodyCollectionInfo = /** @class */ (function (_super) {
    __extends(UpdateCollectionRequestBodyCollectionInfo, _super);
    function UpdateCollectionRequestBodyCollectionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_postman_id" }),
        __metadata("design:type", String)
    ], UpdateCollectionRequestBodyCollectionInfo.prototype, "postmanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateCollectionRequestBodyCollectionInfo.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateCollectionRequestBodyCollectionInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], UpdateCollectionRequestBodyCollectionInfo.prototype, "schema", void 0);
    return UpdateCollectionRequestBodyCollectionInfo;
}(SpeakeasyBase));
export { UpdateCollectionRequestBodyCollectionInfo };
var UpdateCollectionRequestBodyCollectionItemItemRequestBody = /** @class */ (function (_super) {
    __extends(UpdateCollectionRequestBodyCollectionItemItemRequestBody, _super);
    function UpdateCollectionRequestBodyCollectionItemItemRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], UpdateCollectionRequestBodyCollectionItemItemRequestBody.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw" }),
        __metadata("design:type", String)
    ], UpdateCollectionRequestBodyCollectionItemItemRequestBody.prototype, "raw", void 0);
    return UpdateCollectionRequestBodyCollectionItemItemRequestBody;
}(SpeakeasyBase));
export { UpdateCollectionRequestBodyCollectionItemItemRequestBody };
var UpdateCollectionRequestBodyCollectionItemItemRequestHeader = /** @class */ (function (_super) {
    __extends(UpdateCollectionRequestBodyCollectionItemItemRequestHeader, _super);
    function UpdateCollectionRequestBodyCollectionItemItemRequestHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], UpdateCollectionRequestBodyCollectionItemItemRequestHeader.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateCollectionRequestBodyCollectionItemItemRequestHeader.prototype, "value", void 0);
    return UpdateCollectionRequestBodyCollectionItemItemRequestHeader;
}(SpeakeasyBase));
export { UpdateCollectionRequestBodyCollectionItemItemRequestHeader };
var UpdateCollectionRequestBodyCollectionItemItemRequest = /** @class */ (function (_super) {
    __extends(UpdateCollectionRequestBodyCollectionItemItemRequest, _super);
    function UpdateCollectionRequestBodyCollectionItemItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", UpdateCollectionRequestBodyCollectionItemItemRequestBody)
    ], UpdateCollectionRequestBodyCollectionItemItemRequest.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateCollectionRequestBodyCollectionItemItemRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header", elemType: UpdateCollectionRequestBodyCollectionItemItemRequestHeader }),
        __metadata("design:type", Array)
    ], UpdateCollectionRequestBodyCollectionItemItemRequest.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], UpdateCollectionRequestBodyCollectionItemItemRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], UpdateCollectionRequestBodyCollectionItemItemRequest.prototype, "url", void 0);
    return UpdateCollectionRequestBodyCollectionItemItemRequest;
}(SpeakeasyBase));
export { UpdateCollectionRequestBodyCollectionItemItemRequest };
var UpdateCollectionRequestBodyCollectionItemItem = /** @class */ (function (_super) {
    __extends(UpdateCollectionRequestBodyCollectionItemItem, _super);
    function UpdateCollectionRequestBodyCollectionItemItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateCollectionRequestBodyCollectionItemItem.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", UpdateCollectionRequestBodyCollectionItemItemRequest)
    ], UpdateCollectionRequestBodyCollectionItemItem.prototype, "request", void 0);
    return UpdateCollectionRequestBodyCollectionItemItem;
}(SpeakeasyBase));
export { UpdateCollectionRequestBodyCollectionItemItem };
var UpdateCollectionRequestBodyCollectionItem = /** @class */ (function (_super) {
    __extends(UpdateCollectionRequestBodyCollectionItem, _super);
    function UpdateCollectionRequestBodyCollectionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item", elemType: UpdateCollectionRequestBodyCollectionItemItem }),
        __metadata("design:type", Array)
    ], UpdateCollectionRequestBodyCollectionItem.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateCollectionRequestBodyCollectionItem.prototype, "name", void 0);
    return UpdateCollectionRequestBodyCollectionItem;
}(SpeakeasyBase));
export { UpdateCollectionRequestBodyCollectionItem };
var UpdateCollectionRequestBodyCollection = /** @class */ (function (_super) {
    __extends(UpdateCollectionRequestBodyCollection, _super);
    function UpdateCollectionRequestBodyCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", UpdateCollectionRequestBodyCollectionInfo)
    ], UpdateCollectionRequestBodyCollection.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item", elemType: UpdateCollectionRequestBodyCollectionItem }),
        __metadata("design:type", Array)
    ], UpdateCollectionRequestBodyCollection.prototype, "item", void 0);
    return UpdateCollectionRequestBodyCollection;
}(SpeakeasyBase));
export { UpdateCollectionRequestBodyCollection };
var UpdateCollectionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateCollectionRequestBody, _super);
    function UpdateCollectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collection" }),
        __metadata("design:type", UpdateCollectionRequestBodyCollection)
    ], UpdateCollectionRequestBody.prototype, "collection", void 0);
    return UpdateCollectionRequestBody;
}(SpeakeasyBase));
export { UpdateCollectionRequestBody };
var UpdateCollection200ApplicationJsonCollection = /** @class */ (function (_super) {
    __extends(UpdateCollection200ApplicationJsonCollection, _super);
    function UpdateCollection200ApplicationJsonCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateCollection200ApplicationJsonCollection.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateCollection200ApplicationJsonCollection.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], UpdateCollection200ApplicationJsonCollection.prototype, "uid", void 0);
    return UpdateCollection200ApplicationJsonCollection;
}(SpeakeasyBase));
export { UpdateCollection200ApplicationJsonCollection };
var UpdateCollection200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateCollection200ApplicationJson, _super);
    function UpdateCollection200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collection" }),
        __metadata("design:type", UpdateCollection200ApplicationJsonCollection)
    ], UpdateCollection200ApplicationJson.prototype, "collection", void 0);
    return UpdateCollection200ApplicationJson;
}(SpeakeasyBase));
export { UpdateCollection200ApplicationJson };
var UpdateCollection400ApplicationJsonError = /** @class */ (function (_super) {
    __extends(UpdateCollection400ApplicationJsonError, _super);
    function UpdateCollection400ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdateCollection400ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateCollection400ApplicationJsonError.prototype, "name", void 0);
    return UpdateCollection400ApplicationJsonError;
}(SpeakeasyBase));
export { UpdateCollection400ApplicationJsonError };
var UpdateCollection400ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateCollection400ApplicationJson, _super);
    function UpdateCollection400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", UpdateCollection400ApplicationJsonError)
    ], UpdateCollection400ApplicationJson.prototype, "error", void 0);
    return UpdateCollection400ApplicationJson;
}(SpeakeasyBase));
export { UpdateCollection400ApplicationJson };
var UpdateCollection403ApplicationJsonError = /** @class */ (function (_super) {
    __extends(UpdateCollection403ApplicationJsonError, _super);
    function UpdateCollection403ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdateCollection403ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateCollection403ApplicationJsonError.prototype, "name", void 0);
    return UpdateCollection403ApplicationJsonError;
}(SpeakeasyBase));
export { UpdateCollection403ApplicationJsonError };
var UpdateCollection403ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateCollection403ApplicationJson, _super);
    function UpdateCollection403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", UpdateCollection403ApplicationJsonError)
    ], UpdateCollection403ApplicationJson.prototype, "error", void 0);
    return UpdateCollection403ApplicationJson;
}(SpeakeasyBase));
export { UpdateCollection403ApplicationJson };
var UpdateCollection404ApplicationJsonErrorDetails = /** @class */ (function (_super) {
    __extends(UpdateCollection404ApplicationJsonErrorDetails, _super);
    function UpdateCollection404ApplicationJsonErrorDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateCollection404ApplicationJsonErrorDetails.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item" }),
        __metadata("design:type", String)
    ], UpdateCollection404ApplicationJsonErrorDetails.prototype, "item", void 0);
    return UpdateCollection404ApplicationJsonErrorDetails;
}(SpeakeasyBase));
export { UpdateCollection404ApplicationJsonErrorDetails };
var UpdateCollection404ApplicationJsonError = /** @class */ (function (_super) {
    __extends(UpdateCollection404ApplicationJsonError, _super);
    function UpdateCollection404ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", UpdateCollection404ApplicationJsonErrorDetails)
    ], UpdateCollection404ApplicationJsonError.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdateCollection404ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateCollection404ApplicationJsonError.prototype, "name", void 0);
    return UpdateCollection404ApplicationJsonError;
}(SpeakeasyBase));
export { UpdateCollection404ApplicationJsonError };
var UpdateCollection404ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateCollection404ApplicationJson, _super);
    function UpdateCollection404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", UpdateCollection404ApplicationJsonError)
    ], UpdateCollection404ApplicationJson.prototype, "error", void 0);
    return UpdateCollection404ApplicationJson;
}(SpeakeasyBase));
export { UpdateCollection404ApplicationJson };
var UpdateCollectionRequest = /** @class */ (function (_super) {
    __extends(UpdateCollectionRequest, _super);
    function UpdateCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCollectionPathParams)
    ], UpdateCollectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateCollectionRequestBody)
    ], UpdateCollectionRequest.prototype, "request", void 0);
    return UpdateCollectionRequest;
}(SpeakeasyBase));
export { UpdateCollectionRequest };
var UpdateCollectionResponse = /** @class */ (function (_super) {
    __extends(UpdateCollectionResponse, _super);
    function UpdateCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCollectionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCollection200ApplicationJson)
    ], UpdateCollectionResponse.prototype, "updateCollection200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCollection400ApplicationJson)
    ], UpdateCollectionResponse.prototype, "updateCollection400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCollection403ApplicationJson)
    ], UpdateCollectionResponse.prototype, "updateCollection403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateCollection404ApplicationJson)
    ], UpdateCollectionResponse.prototype, "updateCollection404ApplicationJsonObject", void 0);
    return UpdateCollectionResponse;
}(SpeakeasyBase));
export { UpdateCollectionResponse };
