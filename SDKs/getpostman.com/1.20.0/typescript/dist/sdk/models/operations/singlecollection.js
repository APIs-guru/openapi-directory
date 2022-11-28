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
var SingleCollectionPathParams = /** @class */ (function (_super) {
    __extends(SingleCollectionPathParams, _super);
    function SingleCollectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_uid" }),
        __metadata("design:type", String)
    ], SingleCollectionPathParams.prototype, "collectionUid", void 0);
    return SingleCollectionPathParams;
}(SpeakeasyBase));
export { SingleCollectionPathParams };
var SingleCollection200ApplicationJsonCollectionInfo = /** @class */ (function (_super) {
    __extends(SingleCollection200ApplicationJsonCollectionInfo, _super);
    function SingleCollection200ApplicationJsonCollectionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_postman_id" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionInfo.prototype, "postmanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionInfo.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionInfo.prototype, "schema", void 0);
    return SingleCollection200ApplicationJsonCollectionInfo;
}(SpeakeasyBase));
export { SingleCollection200ApplicationJsonCollectionInfo };
var SingleCollection200ApplicationJsonCollectionItemEventScript = /** @class */ (function (_super) {
    __extends(SingleCollection200ApplicationJsonCollectionItemEventScript, _super);
    function SingleCollection200ApplicationJsonCollectionItemEventScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exec" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionItemEventScript.prototype, "exec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionItemEventScript.prototype, "type", void 0);
    return SingleCollection200ApplicationJsonCollectionItemEventScript;
}(SpeakeasyBase));
export { SingleCollection200ApplicationJsonCollectionItemEventScript };
var SingleCollection200ApplicationJsonCollectionItemEvent = /** @class */ (function (_super) {
    __extends(SingleCollection200ApplicationJsonCollectionItemEvent, _super);
    function SingleCollection200ApplicationJsonCollectionItemEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionItemEvent.prototype, "listen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script" }),
        __metadata("design:type", SingleCollection200ApplicationJsonCollectionItemEventScript)
    ], SingleCollection200ApplicationJsonCollectionItemEvent.prototype, "script", void 0);
    return SingleCollection200ApplicationJsonCollectionItemEvent;
}(SpeakeasyBase));
export { SingleCollection200ApplicationJsonCollectionItemEvent };
var SingleCollection200ApplicationJsonCollectionItemRequestBody = /** @class */ (function (_super) {
    __extends(SingleCollection200ApplicationJsonCollectionItemRequestBody, _super);
    function SingleCollection200ApplicationJsonCollectionItemRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formdata" }),
        __metadata("design:type", Array)
    ], SingleCollection200ApplicationJsonCollectionItemRequestBody.prototype, "formdata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionItemRequestBody.prototype, "mode", void 0);
    return SingleCollection200ApplicationJsonCollectionItemRequestBody;
}(SpeakeasyBase));
export { SingleCollection200ApplicationJsonCollectionItemRequestBody };
var SingleCollection200ApplicationJsonCollectionItemRequestHeader = /** @class */ (function (_super) {
    __extends(SingleCollection200ApplicationJsonCollectionItemRequestHeader, _super);
    function SingleCollection200ApplicationJsonCollectionItemRequestHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionItemRequestHeader.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionItemRequestHeader.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionItemRequestHeader.prototype, "value", void 0);
    return SingleCollection200ApplicationJsonCollectionItemRequestHeader;
}(SpeakeasyBase));
export { SingleCollection200ApplicationJsonCollectionItemRequestHeader };
var SingleCollection200ApplicationJsonCollectionItemRequest = /** @class */ (function (_super) {
    __extends(SingleCollection200ApplicationJsonCollectionItemRequest, _super);
    function SingleCollection200ApplicationJsonCollectionItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", SingleCollection200ApplicationJsonCollectionItemRequestBody)
    ], SingleCollection200ApplicationJsonCollectionItemRequest.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionItemRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header", elemType: SingleCollection200ApplicationJsonCollectionItemRequestHeader }),
        __metadata("design:type", Array)
    ], SingleCollection200ApplicationJsonCollectionItemRequest.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionItemRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionItemRequest.prototype, "url", void 0);
    return SingleCollection200ApplicationJsonCollectionItemRequest;
}(SpeakeasyBase));
export { SingleCollection200ApplicationJsonCollectionItemRequest };
var SingleCollection200ApplicationJsonCollectionItem = /** @class */ (function (_super) {
    __extends(SingleCollection200ApplicationJsonCollectionItem, _super);
    function SingleCollection200ApplicationJsonCollectionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event", elemType: SingleCollection200ApplicationJsonCollectionItemEvent }),
        __metadata("design:type", Array)
    ], SingleCollection200ApplicationJsonCollectionItem.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SingleCollection200ApplicationJsonCollectionItem.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", SingleCollection200ApplicationJsonCollectionItemRequest)
    ], SingleCollection200ApplicationJsonCollectionItem.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", Array)
    ], SingleCollection200ApplicationJsonCollectionItem.prototype, "response", void 0);
    return SingleCollection200ApplicationJsonCollectionItem;
}(SpeakeasyBase));
export { SingleCollection200ApplicationJsonCollectionItem };
var SingleCollection200ApplicationJsonCollection = /** @class */ (function (_super) {
    __extends(SingleCollection200ApplicationJsonCollection, _super);
    function SingleCollection200ApplicationJsonCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", SingleCollection200ApplicationJsonCollectionInfo)
    ], SingleCollection200ApplicationJsonCollection.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item", elemType: SingleCollection200ApplicationJsonCollectionItem }),
        __metadata("design:type", Array)
    ], SingleCollection200ApplicationJsonCollection.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variables" }),
        __metadata("design:type", Array)
    ], SingleCollection200ApplicationJsonCollection.prototype, "variables", void 0);
    return SingleCollection200ApplicationJsonCollection;
}(SpeakeasyBase));
export { SingleCollection200ApplicationJsonCollection };
var SingleCollection200ApplicationJson = /** @class */ (function (_super) {
    __extends(SingleCollection200ApplicationJson, _super);
    function SingleCollection200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collection" }),
        __metadata("design:type", SingleCollection200ApplicationJsonCollection)
    ], SingleCollection200ApplicationJson.prototype, "collection", void 0);
    return SingleCollection200ApplicationJson;
}(SpeakeasyBase));
export { SingleCollection200ApplicationJson };
var SingleCollectionRequest = /** @class */ (function (_super) {
    __extends(SingleCollectionRequest, _super);
    function SingleCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SingleCollectionPathParams)
    ], SingleCollectionRequest.prototype, "pathParams", void 0);
    return SingleCollectionRequest;
}(SpeakeasyBase));
export { SingleCollectionRequest };
var SingleCollectionResponse = /** @class */ (function (_super) {
    __extends(SingleCollectionResponse, _super);
    function SingleCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SingleCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SingleCollectionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SingleCollection200ApplicationJson)
    ], SingleCollectionResponse.prototype, "singleCollection200ApplicationJsonObject", void 0);
    return SingleCollectionResponse;
}(SpeakeasyBase));
export { SingleCollectionResponse };
