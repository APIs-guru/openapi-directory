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
import { ApiCoreResponsesEntityUriSystemInt64 } from "./apicoreresponsesentityurisystemint64";
var ApiCoreDtoGrantsGrant = /** @class */ (function (_super) {
    __extends(ApiCoreDtoGrantsGrant, _super);
    function ApiCoreDtoGrantsGrant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatapointType, form, name=DatapointType;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoGrantsGrant.prototype, "datapointType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Entity, form, name=Entity;" }),
        __metadata("design:type", ApiCoreResponsesEntityUriSystemInt64)
    ], ApiCoreDtoGrantsGrant.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EntityName, form, name=EntityName;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoGrantsGrant.prototype, "entityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EntityType, form, name=EntityType;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoGrantsGrant.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type, form, name=Type;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoGrantsGrant.prototype, "type", void 0);
    return ApiCoreDtoGrantsGrant;
}(SpeakeasyBase));
export { ApiCoreDtoGrantsGrant };
