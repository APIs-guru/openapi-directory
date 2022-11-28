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
import { OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy } from "./onereturnsgetresponses200contentapplication1jsonschemapropertiesdataitemspropertiesupdatedby";
import { OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee } from "./oneorderspostresponses201contentapplication1jsonschemapropertiesoriginalconsignee";
// OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy
/**
 * Responsibility for resolving this issue
**/
var OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy, _super);
    function OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy.prototype, "name", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy };
var OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage, _super);
    function OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage.prototype, "name", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage };
var OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State, _super);
    function OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State.prototype, "name", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State };
var OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2 = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2, _super);
    function OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionRequiredBy" }),
        __metadata("design:type", OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2.prototype, "actionRequiredBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detailCode" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2.prototype, "detailCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isClosed" }),
        __metadata("design:type", Boolean)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2.prototype, "isClosed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stage" }),
        __metadata("design:type", OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2.prototype, "stage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2.prototype, "state", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2 };
var OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2, _super);
    function OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2)
    ], OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2.prototype, "status", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 };
var OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2 = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2, _super);
    function OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2.prototype, "name", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2 };
var OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2 = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2, _super);
    function OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso2" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2.prototype, "iso2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2.prototype, "name", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2 };
var OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2 = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2, _super);
    function OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLocality" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "addressLocality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressRegion" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "addressRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso" }),
        __metadata("design:type", OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "iso", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedBy" }),
        __metadata("design:type", OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy)
    ], OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2.prototype, "updatedBy", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2 };
var OneordersPostResponses201ContentApplication1jsonSchemaParentOrder = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchemaParentOrder, _super);
    function OneordersPostResponses201ContentApplication1jsonSchemaParentOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OneordersPostResponses201ContentApplication1jsonSchemaParentOrder.prototype, "id", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchemaParentOrder;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchemaParentOrder };
var OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2 = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2, _super);
    function OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2.prototype, "id", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2 };
var OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2 = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2, _super);
    function OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcodeScanValue" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2.prototype, "barcodeScanValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carrier" }),
        __metadata("design:type", OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2)
    ], OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2.prototype, "carrier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2.prototype, "value", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2 };
var OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2 = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2, _super);
    function OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2.prototype, "id", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2 };
var OneordersPostResponses201ContentApplication1jsonSchema = /** @class */ (function (_super) {
    __extends(OneordersPostResponses201ContentApplication1jsonSchema, _super);
    function OneordersPostResponses201ContentApplication1jsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentStatus" }),
        __metadata("design:type", OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2)
    ], OneordersPostResponses201ContentApplication1jsonSchema.prototype, "currentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departDate" }),
        __metadata("design:type", Date)
    ], OneordersPostResponses201ContentApplication1jsonSchema.prototype, "departDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dispatchDate" }),
        __metadata("design:type", Date)
    ], OneordersPostResponses201ContentApplication1jsonSchema.prototype, "dispatchDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OneordersPostResponses201ContentApplication1jsonSchema.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchant" }),
        __metadata("design:type", OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2)
    ], OneordersPostResponses201ContentApplication1jsonSchema.prototype, "merchant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantOrderId" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchema.prototype, "merchantOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantShippingMethod" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchema.prototype, "merchantShippingMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalConsignee" }),
        __metadata("design:type", OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2)
    ], OneordersPostResponses201ContentApplication1jsonSchema.prototype, "originalConsignee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentOrder" }),
        __metadata("design:type", OneordersPostResponses201ContentApplication1jsonSchemaParentOrder)
    ], OneordersPostResponses201ContentApplication1jsonSchema.prototype, "parentOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseOrderNum" }),
        __metadata("design:type", String)
    ], OneordersPostResponses201ContentApplication1jsonSchema.prototype, "purchaseOrderNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordedOn" }),
        __metadata("design:type", Date)
    ], OneordersPostResponses201ContentApplication1jsonSchema.prototype, "recordedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingNumbers", elemType: OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2 }),
        __metadata("design:type", Array)
    ], OneordersPostResponses201ContentApplication1jsonSchema.prototype, "trackingNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validatedConsignee" }),
        __metadata("design:type", OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee)
    ], OneordersPostResponses201ContentApplication1jsonSchema.prototype, "validatedConsignee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warehouse" }),
        __metadata("design:type", OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2)
    ], OneordersPostResponses201ContentApplication1jsonSchema.prototype, "warehouse", void 0);
    return OneordersPostResponses201ContentApplication1jsonSchema;
}(SpeakeasyBase));
export { OneordersPostResponses201ContentApplication1jsonSchema };
