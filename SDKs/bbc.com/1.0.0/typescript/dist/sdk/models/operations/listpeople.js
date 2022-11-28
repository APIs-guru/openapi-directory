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
export var ListPeopleHasExternalIdEnum;
(function (ListPeopleHasExternalIdEnum) {
    ListPeopleHasExternalIdEnum["True"] = "true";
    ListPeopleHasExternalIdEnum["False"] = "false";
})(ListPeopleHasExternalIdEnum || (ListPeopleHasExternalIdEnum = {}));
var ListPeopleQueryParams = /** @class */ (function (_super) {
    __extends(ListPeopleQueryParams, _super);
    function ListPeopleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authority" }),
        __metadata("design:type", String)
    ], ListPeopleQueryParams.prototype, "authority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_external_id" }),
        __metadata("design:type", Array)
    ], ListPeopleQueryParams.prototype, "hasExternalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], ListPeopleQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id_type" }),
        __metadata("design:type", String)
    ], ListPeopleQueryParams.prototype, "idType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListPeopleQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListPeopleQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_id" }),
        __metadata("design:type", Array)
    ], ListPeopleQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_pid" }),
        __metadata("design:type", Array)
    ], ListPeopleQueryParams.prototype, "partnerPid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pid" }),
        __metadata("design:type", Array)
    ], ListPeopleQueryParams.prototype, "pid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=programme" }),
        __metadata("design:type", String)
    ], ListPeopleQueryParams.prototype, "programme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], ListPeopleQueryParams.prototype, "q", void 0);
    return ListPeopleQueryParams;
}(SpeakeasyBase));
export { ListPeopleQueryParams };
var ListPeopleRequest = /** @class */ (function (_super) {
    __extends(ListPeopleRequest, _super);
    function ListPeopleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPeopleQueryParams)
    ], ListPeopleRequest.prototype, "queryParams", void 0);
    return ListPeopleRequest;
}(SpeakeasyBase));
export { ListPeopleRequest };
var ListPeopleResponse = /** @class */ (function (_super) {
    __extends(ListPeopleResponse, _super);
    function ListPeopleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ListPeopleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPeopleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], ListPeopleResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListPeopleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListPeopleResponse.prototype, "nitro", void 0);
    return ListPeopleResponse;
}(SpeakeasyBase));
export { ListPeopleResponse };
