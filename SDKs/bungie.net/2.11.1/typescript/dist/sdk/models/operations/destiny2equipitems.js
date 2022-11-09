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
var Destiny2EquipItemsSecurity = /** @class */ (function (_super) {
    __extends(Destiny2EquipItemsSecurity, _super);
    function Destiny2EquipItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Destiny2EquipItemsSecurity.prototype, "oauth2", void 0);
    return Destiny2EquipItemsSecurity;
}(SpeakeasyBase));
export { Destiny2EquipItemsSecurity };
var Destiny2EquipItemsRequest = /** @class */ (function (_super) {
    __extends(Destiny2EquipItemsRequest, _super);
    function Destiny2EquipItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Destiny2EquipItemsSecurity)
    ], Destiny2EquipItemsRequest.prototype, "security", void 0);
    return Destiny2EquipItemsRequest;
}(SpeakeasyBase));
export { Destiny2EquipItemsRequest };
var Destiny2EquipItemsResponse = /** @class */ (function (_super) {
    __extends(Destiny2EquipItemsResponse, _super);
    function Destiny2EquipItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2EquipItemsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], Destiny2EquipItemsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], Destiny2EquipItemsResponse.prototype, "statusCode", void 0);
    return Destiny2EquipItemsResponse;
}(SpeakeasyBase));
export { Destiny2EquipItemsResponse };
